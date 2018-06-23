import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import { googleMapAPI } from "../../requests/configuration";
import CurrentMarker from "./CurrentMarker";
import CircularProgress from "../common/CircularProgress";

class GoogleMap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      currentLocation: null,
      center: null,
      zoom: 13
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
    const loading = false;

    this.setState({
      loading,
      currentLocation,
      center
    });
  };

  componentDidMount() {
    this.getLocation();
  }

  render() {
    const { loading, center, zoom } = this.state;

    if (loading) {
      return <CircularProgress />;
    } else {
      return (
        <div className="MapPage" style={{ height: "80vh", width: "100%" }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: googleMapAPI }}
            defaultCenter={center}
            defaultZoom={zoom}
          >
            <CurrentMarker lat={center.lat} lng={center.lng} text={"You"} />
          </GoogleMapReact>
        </div>
      );
    }
  }
}

export default GoogleMap;
