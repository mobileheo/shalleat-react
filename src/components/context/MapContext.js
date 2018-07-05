import React, { Component } from "react";
import Restaurant from "../../requests/restaurant";

const { Consumer, Provider } = React.createContext({});

const calcZoom = radius => {
  const scale = radius / 500;
  return +(16 - Math.log(scale) / Math.log(2));
};

const RADIUS = 800;
const ZOOM = calcZoom(RADIUS);

const isContainKeyword = (r, keyword) => {
  let { name, opening_hours = false, types, vicinity } = r;
  const { open_now = false } = opening_hours;
  const k = keyword.toLowerCase();
  name = name.toLowerCase();
  if (k.includes("open") && open_now) return true;
  if (name.includes(k)) return true;
  if (types.filter(t => t.includes(k)).length !== 0) return true;
  if (vicinity.includes(k)) return true;

  return false;
};

const getFilterdList = (arr, keyword) => {
  return arr.filter(r => isContainKeyword(r, keyword));
};

export class MapProvider extends Component {
  state = {
    loading: true,
    fetched: false,
    currentLocation: null,
    defaultCenter: null,
    radius: RADIUS,
    setRadius: radius => this.setState({ radius }),
    center: null,
    setCenter: center => {
      this.setState({ center });
    },
    defaultZoom: ZOOM,
    zoom: ZOOM,
    setZoom: zoom => this.setState({ zoom }),
    restaurants: [],
    setRestaurants: async radius => {
      try {
        await this.setState({ restaurants: [], radius });
        await this.findNearby();
      } catch (error) {
        console.log(error);
      }
    },
    typeKeyword: "",
    setTypeKeyword: async typeKeyword => {
      try {
        await this.setState({ restaurants: [], typeKeyword });
        await this.findNearby();
      } catch (error) {
        console.log(error);
      }
    },
    popover: { chosenId: null, isOpen: false },
    setPopover: (chosenId, isOpen) => {
      console.log("setPopover");
      const popover = { chosenId, isOpen };
      this.setState({ popover });
    },
    keyword: "",
    setKeyword: keyword => this.setState({ keyword }),
    filteredRests: () =>
      getFilterdList(this.state.restaurants, this.state.keyword)
  };

  getLocation() {
    if (navigator.geolocation) {
      this.watchID = navigator.geolocation.watchPosition(
        this.geoSuccess,
        this.geoError
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  geoError() {
    alert("Geocoder failed.");
  }

  geoSuccess = async position => {
    console.log("geoSuccess");
    const { latitude: lat, longitude: lng } = position.coords;
    const currentLocation = { lat, lng };
    if (this._isMounted) {
      console.log("geoSuccess 2");
      this.storeCurrentLocation(currentLocation);
      await this.setState({ currentLocation });
      await this.findNearby();
    }
  };

  async findNearby() {
    const { currentLocation, radius, typeKeyword } = this.state;
    const filters = { ...currentLocation, radius, typeKeyword };

    try {
      const firstBatch = await Restaurant.findNearby(filters);
      console.log("firstBatch => ", firstBatch);
      if (firstBatch) {
        const { next_page_token: pageToken, results: restaurants } = firstBatch;
        await this.setState({
          loading: false,
          fetched: true,
          restaurants
        });
        // await this.concatNext(pageToken);
      }
    } catch (error) {
      console.log(error);
    }
  }
  async concatNext(pageToken) {
    if (!pageToken) {
      navigator.geolocation.clearWatch(this.watchID);
      this.state.fetched = true;
      return;
    } else {
      const nextBatch = await Restaurant.getNextRests({ pageToken });
      let { restaurants } = this.state;

      if (nextBatch) {
        const { next_page_token: nextToken = null, results: next } = nextBatch;
        restaurants = restaurants.concat(next);
        await this.setState({ restaurants });
        await this.concatNext(nextToken);
      }
    }
  }

  storeCurrentLocation(currentLocation) {
    window.sessionStorage.setItem(
      "shalleat",
      JSON.stringify({ currentLocation })
    );
  }
  getCurrentLocation() {
    const currentLocation = JSON.parse(
      window.sessionStorage.getItem("shalleat")
    );
    return currentLocation || {};
  }

  async componentDidMount() {
    this._isMounted = true;
    console.log("componentDidMount");
    const { currentLocation = null } = this.getCurrentLocation();
    const center = currentLocation;

    if (currentLocation) {
      await this.setState({ currentLocation, center });
      await this.findNearby();
    } else {
      await this.getLocation();
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
    navigator.geolocation.clearWatch(this.watchID);
  }

  render() {
    const { children } = this.props;
    return <Provider value={this.state}>{children}</Provider>;
  }
}

export const MapConsumer = Consumer;
