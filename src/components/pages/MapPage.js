import React, { Component } from "react";
import GoogleMap from "../maps/GoogleMap";

const MapPage = ({ user }) => (
  <div
    className="MapPage d-flex justify-content-center align-items-center"
    style={{ height: "95vh" }}
  >
    <GoogleMap user={user} />
  </div>
);

export default MapPage;
