import React, { Component } from "react";
import Restaurant from "../../requests/restaurant";

const { Consumer, Provider } = React.createContext({});

const RADIUS = 1500;
const calcZoom = radius => {
  const scale = radius / 500;
  return +(16 - Math.log(scale) / Math.log(2));
};
const ZOOM = calcZoom(RADIUS);

export class MapProvider extends Component {
  state = {
    loading: true,
    setLoading: this.setLoading,
    currentLocation: null,
    defaultCenter: null,
    radius: RADIUS,
    setRadius: radius => this.setState({ radius }),
    defaultZoom: ZOOM,
    view: { center: {}, zoom: null },
    setView: (center = this.state.currentLocation, zoom) => {
      const view = { center, zoom };
      this.setState({ view });
    },
    restaurants: [],
    setRestaurants: async radius => {
      try {
        const filters = { ...this.state.currentLocation, radius };
        this.setState({ restaurants: [] });
        const fullBatch = await Restaurant.findNearby(filters);
        const { results: restaurants } = fullBatch;
        this.setState({ restaurants });
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

  geoSuccess = position => {
    const { latitude: lat, longitude: lng } = position.coords;
    const currentLocation = { lat, lng };
    const defaultCenter = currentLocation;
    this.findNearby(currentLocation, defaultCenter);
  };

  async findNearby(currentLocation, defaultCenter) {
    const { radius, defaultZoom } = this.state;
    const filters = { ...currentLocation, radius };
    let view = { center: defaultCenter, zoom: defaultZoom };

    const loading = false;
    try {
      const firstBatch = await Restaurant.findNearby(filters);
      if (firstBatch) {
        const { next_page_token: pageToken, results: restaurants } = firstBatch;
        this.setState({
          loading,
          currentLocation,
          defaultCenter,
          restaurants,
          view
        });
        this.concatNext(pageToken);
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
      const nextBatch = await Restaurant.getNextRests({ pageToken });
      if (nextBatch) {
        const { next_page_token: nextToken = null, results: next } = nextBatch;
        restaurants = restaurants.concat(next);
        this.setState({ restaurants });
        this.concatNext(nextToken);
      }
    }
  }

  componentDidMount() {
    this.getLocation();
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
