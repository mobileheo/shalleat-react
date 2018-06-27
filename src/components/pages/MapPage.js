import React, { Component } from "react";
import GoogleMap from "../maps/GoogleMap";
import Test from "../../Test";
import { MapProvider } from "../context/MapContext";
const MapPage = ({ user }) => (
  <MapProvider>
    <div
      className="MapPage d-flex justify-content-center align-items-center"
      style={{ height: "95vh" }}
    >
      <GoogleMap user={user} />
    </div>
    {/* <div className="red">
      <Test />
    </div> */}
  </MapProvider>
);

export default MapPage;
