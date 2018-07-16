import React, { Component } from "react";
import { isMobile } from "react-device-detect";
import Restaurant from "../../requests/restaurant";

const { Consumer, Provider } = React.createContext({});
const RADIUS = 600;

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
    setLoading: loading => this.setState({ loading }),
    fetched: false,
    currentLocation: null,
    defaultCenter: null,
    radius: RADIUS,
    setRadius: radius => this.setState({ radius }),
    center: null,
    setCenter: center => {
      this.setState({ center });
    },
    defaultZoom: this.calcZoom(RADIUS),
    zoom: this.calcZoom(RADIUS),
    setZoom: radius => {
      const zoom = this.calcZoom(radius);
      this.setState({ zoom });
    },
    restaurants: null,
    setRestaurants: async (radius = this.state.radius) => {
      try {
        await this.setState({ restaurants: [], radius });
        await this.findNearby();
        // await this.setState({ loading: false });
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
      const popover = { chosenId, isOpen };
      this.setState({ popover });
    },
    keyword: "",
    setKeyword: keyword => this.setState({ keyword }),
    filteredRests: () =>
      getFilterdList(this.state.restaurants, this.state.keyword),
    scrollToTop: () => {
      const { chosenId } = this.state.popover;
      const targetContainer = document.querySelector(".RestList");
      const targetChild = document.querySelector(`#list-item-${chosenId}`);
      targetContainer.scrollTop =
        targetChild.offsetTop - targetContainer.offsetTop;
    },
    skipInitDetailsFecth: false,
    setSkipInitDetailsFecth: () =>
      this.setState({ skipInitDetailsFecth: true }),
    reviews: {},
    setReviews: review => {
      const reviews = { ...this.state.reviews, ...review };
      this.setState({ reviews });
    }
  };

  calcZoom(radius) {
    const scale = radius / 500;
    return isMobile
      ? +(14 - Math.log(scale) / Math.log(2))
      : +(16 - Math.log(scale) / Math.log(2));
  }

  getLocation() {
    console.log(" getLocation() ");
    // this.watchID = navigator.geolocation.watchPosition(
    //   pos => {
    //     var crd = pos.coords;
    //     console.log(crd);
    //     // this.updateLocation(crd.latitude, crd.longitude);
    //   }
    //   // {
    //   //   enableHighAccuracy: true,
    //   //   timeout: 1000,
    //   //   maximumAge: 0,
    //   //   distanceFilter: 5
    //   // }
    // );
    if (navigator.geolocation) {
      this.watchID = navigator.geolocation.watchPosition(
        this.geoSuccess,
        this.geoError
      );
      console.log("navigator.geolocation => ", navigator.geolocation);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  geoError() {
    console.log("geoError");
    alert("Geocoder failed.");
  }

  geoSuccess = async position => {
    try {
      const { latitude: lat, longitude: lng } = position.coords;
      const currentLocation = { lat, lng };
      await this.storeCurrentLocation(currentLocation);
      await this.setState({ currentLocation });
      await this.findNearby();
      await this.setState({ loading: false });
    } catch (error) {
      console.log(error);
    }
  };

  async findNearby() {
    const { currentLocation, radius, typeKeyword } = this.state;
    const filters = { ...currentLocation, radius, typeKeyword };
    try {
      const firstBatch = await Restaurant.findNearby(filters);

      if (firstBatch) {
        const { next_page_token: pageToken, results: restaurants } = firstBatch;
        await this.setState({
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
    try {
      if (!pageToken) {
        navigator.geolocation.clearWatch(this.watchID);
        this.setState({ fetched: true });
        return;
      } else {
        const nextBatch = await Restaurant.getNextRests({ pageToken });
        let { restaurants } = this.state;

        if (nextBatch) {
          const {
            next_page_token: nextToken = null,
            results: next
          } = nextBatch;
          restaurants = restaurants.concat(next);
          await this.setState({ restaurants });
          await this.concatNext(nextToken);
        }
      }
    } catch (error) {
      console.log(error);
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
    try {
      const { currentLocation = null } = this.getCurrentLocation();
      const center = currentLocation;
      if (currentLocation) {
        await this.setState({ currentLocation, center });
        await this.findNearby();
        await this.setState({ loading: false });
      } else {
        this.getLocation();
      }
    } catch (error) {
      console.log(error);
    }
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
  }

  render() {
    const { children } = this.props;
    return <Provider value={this.state}>{children}</Provider>;
  }
}

export const MapConsumer = Consumer;
