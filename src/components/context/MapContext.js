import React, { Component } from "react";
import Restaurant from "../../requests/restaurant";

const { Consumer, Provider } = React.createContext({});

export class MapProvider extends Component {
  state = {
    number: 10,
    inc: () => {
      this.setState({ number: this.state.number + 1 });
    },
    loading: true,
    currentLocation: null,
    defaultCenter: null,
    defaultZoom: 15,
    view: { center: {}, zoom: null },
    setView: (center, zoom) => {
      const view = { center, zoom };
      this.setState({ view });
    },
    restaurants: [],
    radius: 580,
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
    try {
      const restaurants = await Restaurant.findNearby(filters);
      this.setState({
        loading,
        currentLocation,
        defaultCenter,
        restaurants,
        view
      });
    } catch (error) {
      console.log(error);
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
