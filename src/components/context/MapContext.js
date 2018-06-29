import React, { Component } from "react";
import anime from "animejs";
import Restaurant from "../../requests/restaurant";

const { Consumer, Provider } = React.createContext({});

const calcZoom = radius => {};

export class MapProvider extends Component {
  state = {
    loading: true,
    setLoading: () => this.setState({ loading: !this.state.loading }),
    mapLoading: true,
    setMapLoading: () => this.setState({ mapLoading: !this.state.mapLoading }),
    currentLocation: null,
    defaultCenter: null,
    defaultZoom: 15,
    view: { center: {}, zoom: null },
    setView: (center = this.state.currentLocation, zoom) => {
      const view = { center, zoom };
      this.setState({ view });
    },
    restaurants: [],
    radius: 40000,
    setRestaurants: async radius => {
      try {
        const filters = { ...this.state.currentLocation, radius };
        const restaurants = await Restaurant.findNearby(filters);
        const mapLoading = false;
        this.setState({
          mapLoading,
          restaurants,
          radius
        });
        console.log(restaurants.length);
      } catch (error) {
        console.lig(error);
      }
    },
    popover: { chosenId: null, isOpen: false },
    setPopover: (chosenId, isOpen) => {
      const popover = { chosenId, isOpen };
      this.setState({ popover });
    }
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
    const mapLoading = false;
    try {
      const {
        next_page_token: pageToken,
        results: restaurants
      } = await Restaurant.findNearby(filters);
      await this.concatNext(pageToken);
      this.setState({
        loading,
        mapLoading,
        currentLocation,
        defaultCenter,
        restaurants,
        view
      });
      console.log("in findnearby => ", pageToken);
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
      const nextRests = await Restaurant.getNextRests({ pageToken });
      const { next_page_token: nextToken = null, results: next } = nextRests;
      restaurants = restaurants.concat(next);
      this.setState({ restaurants });
      this.concatNext(nextToken);
    }
  }

  componentDidMount() {
    this.getLocation();
  }

  render() {
    const { children } = this.props;
    return <Provider value={this.state}>{children}</Provider>;
  }
}

export const MapConsumer = Consumer;
