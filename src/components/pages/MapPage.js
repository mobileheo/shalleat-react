import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import { googleMapAPI } from "../../requests/configuration";
import CircularProgress from "../common/CircularProgress";

const AnyReactComponent = ({ text }) => (
  <div
    className="d-flex justify-content-center"
    style={{
      // border: "solid 1px black",
      width: "50px",
      height: "50px",
      transform: "translate(-25px, -25px)"
    }}
  >
    <div className="d-flex flex-column align-items-center">
      <i
        className="material-icons text-info"
        style={{
          fontSize: "36px",
          lineHeight: 1
        }}
      >
        person_pin
      </i>
      <span className="badge badge-info">You</span>
    </div>
  </div>
);

class MapPage extends Component {
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
            <AnyReactComponent
              lat={center.lat}
              lng={center.lng}
              text={"CurrentLocation"}
            />
          </GoogleMapReact>
        </div>
      );
    }
  }
}

export default MapPage;
