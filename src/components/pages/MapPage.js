import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import { googleMapAPI } from "../../requests/configuration";
import CircularProgress from "../common/CircularProgress";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class MapPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      center: null,
      zoom: 11
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
    const center = { lat, lng };
    const loading = false;
    this.setState({
      loading,
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
        <div className="MapPage" style={{ height: "100vh", width: "100%" }}>
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

    // return !this.props.isGeolocationAvailable ? (
    //   <div>Your browser does not support Geolocation</div>
    // ) : !this.props.isGeolocationEnabled ? (
    //   <div>Geolocation is not enabled</div>
    // ) : this.props.coords ? (
    //   <table>
    //     <tbody>
    //       <tr>
    //         <td>latitude</td>
    //         <td>{this.props.coords.latitude}</td>
    //       </tr>
    //       <tr>
    //         <td>longitude</td>
    //         <td>{this.props.coords.longitude}</td>
    //       </tr>
    //     </tbody>
    //   </table>
    // ) : (
    //   <div>Getting the location data&hellip; </div>
    // );
  }
}

export default MapPage;
// export default geolocated({
//   positionOptions: {
//     enableHighAccuracy: true
//   },
//   userDecisionTimeout: null
// })(MapPage);
