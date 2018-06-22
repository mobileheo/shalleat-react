import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

class MapPage extends Component {
  render() {
    return (
      <div className="MapPabe">
        <GoogleMapReact />
      </div>
    );
  }
}

export default MapPage;
