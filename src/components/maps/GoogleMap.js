import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import { googleMapAPI } from "../../requests/configuration";
import CurrentMarker from "./CurrentMarker";
import RestaurantMarker from "./RestaurantMarker";
import CircularProgress from "../common/CircularProgress";
import Restaurant from "../../requests/restaurant";

const restaurantMarkers = restaurants =>
  restaurants.map((r, i) => {
    const { geometry, icon, name, place_id: placeId } = r;
    const { lat, lng } = geometry.location;
    return (
      <RestaurantMarker
        key={placeId}
        id={i}
        placeId={placeId}
        filters={["name", "opening_hours"]}
        lat={lat}
        lng={lng}
        icon={icon}
        name={name}
      />
    );
  });

class GoogleMap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      currentLocation: null,
      center: null,
      zoom: 15,
      restaurants: [],
      radius: 580
    };
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.geoSuccess, this.geoError);
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

    this.setState(
      {
        currentLocation,
        center
      },
      this.findNearby
    );
  };

  async findNearby() {
    const { currentLocation, radius } = this.state;
    const filters = { ...currentLocation, radius };
    const loading = false;
    try {
      const restaurants = await Restaurant.findNearby(filters);
      this.setState({
        loading,
        restaurants
      });
    } catch (error) {
      console.log(error);
    }
  }

  componentDidMount() {
    this.getLocation();
  }

  render() {
    const { loading, center, zoom, restaurants } = this.state;
    if (loading) {
      return <CircularProgress />;
    } else {
      const { results } = restaurants;
      return (
        <div className="MapPage" style={{ height: "95vh", width: "100%" }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: googleMapAPI }}
            defaultCenter={center}
            defaultZoom={zoom}
          >
            <CurrentMarker lat={center.lat} lng={center.lng} text={"You"} />
            {restaurantMarkers(results)}
          </GoogleMapReact>
        </div>
      );
    }
  }
}

export default GoogleMap;
