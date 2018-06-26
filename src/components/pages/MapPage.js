import React, { Component } from "react";
import GoogleMap from "../maps/GoogleMap";

const MapPage = () => (
  <div
    className="MapPage d-flex justify-content-center align-items-center"
    style={{ height: "95vh" }}
  >
    <GoogleMap />
  </div>
);

export default MapPage;
