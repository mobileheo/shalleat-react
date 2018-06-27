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
    center: null,
    zoom: 15,
    restaurants: [],
    radius: 580,
    chosenId: null,
    setChosenId: chosenId => {
      this.setState({ chosenId });
    }
  };
  // setPlaceId(number) {
  //   return () => this.setState({ placeId: number });
  // }

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
    const center = currentLocation;
    this.findNearby(currentLocation, center);
  };

  async findNearby(currentLocation, center) {
    const { radius } = this.state;
    const filters = { ...currentLocation, radius };
    const loading = false;
    try {
      const restaurants = await Restaurant.findNearby(filters);
      this.setState({
        loading,
        currentLocation,
        center,
        restaurants
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
