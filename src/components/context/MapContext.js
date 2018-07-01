import React, { Component } from "react";
import Restaurant from "../../requests/restaurant";

const { Consumer, Provider } = React.createContext({});

const calcZoom = radius => {
  const scale = radius / 500;
  return +(16 - Math.log(scale) / Math.log(2));
};

const RADIUS = 1500;
const ZOOM = calcZoom(RADIUS);

const isContainKeyword = (r, keyword) => {
  let { name, opening_hours = false, rating, types, vicinity } = r;
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
    // user: this.props.user,
    loading: true,
    setLoading: this.setLoading,
    currentLocation: null,
    defaultCenter: null,
    radius: RADIUS,
    setRadius: radius => this.setState({ radius }),
    defaultZoom: ZOOM,
    view: { center: {}, zoom: ZOOM },
    setView: (center = this.state.currentLocation, zoom) => {
      const view = { center, zoom };
      this.setState({ view });
    },
    restaurants: [],
    setRestaurants: async radius => {
      try {
        this.setState({ restaurants: [], radius });
        await this.findNearby();
      } catch (error) {
        console.log(error);
      }
    },
    popover: { chosenId: null, isOpen: false },
    setPopover: (chosenId, isOpen) => {
      const popover = { chosenId, isOpen };
      this.setState({ popover });
    },
    keyword: "",
    setKeyword: keyword => {
      this.setState({ keyword });
    },
    listFilter: () => {
      return getFilterdList(this.state.restaurants, this.state.keyword);
    }
  };

  setLoading() {
    this.setState({ loading: !this.state.loading });
  }

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
    const { latitude: lat, longitude: lng } = position.coords;
    const currentLocation = { lat, lng };
    if (this._isMounted) {
      this.storeCurrentLocation(currentLocation);
      await this.setState({ currentLocation });
      await this.findNearby();
    }
  };

  async findNearby() {
    const { currentLocation, radius } = this.state;
    const filters = { ...currentLocation, radius };
    const loading = false;
    try {
      const firstBatch = await Restaurant.findNearby(filters);
      if (firstBatch) {
        const { next_page_token: pageToken, results: restaurants } = firstBatch;
        await this.setState({
          loading,
          restaurants
        });
        await this.concatNext(pageToken);
        console.log("in findnearby => ", pageToken);
      }
    } catch (error) {
      console.log(error);
    }
  }
  async concatNext(pageToken) {
    if (!pageToken) {
      navigator.geolocation.clearWatch(this.watchID);
      return;
    } else {
      let { restaurants } = this.state;
      console.log("original => ", restaurants);
      const nextBatch = await Restaurant.getNextRests({ pageToken });
      console.log("next => ", nextBatch);
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
    const { currentLocation = null } = this.getCurrentLocation();
    console.log(this.getCurrentLocation());

    if (currentLocation) {
      await this.setState({ currentLocation });
      await this.findNearby();
    } else {
      this.getLocation();
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
