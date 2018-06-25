import React, { Component } from "react";
import GoogleMap from "../maps/GoogleMap";

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

  render() {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "95vh" }}
      >
        <GoogleMap />
      </div>
    );
  }
}

export default MapPage;
