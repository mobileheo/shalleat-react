import React from "react";
import GoogleMap from "../maps/GoogleMap";
import RestList from "../restaurants/RestList";
// import Test from "../../Test";
import { MapProvider } from "../context/MapContext";
import SearchBar from "../maps/SearchBar";
import RadiusInputBar from "../maps/RadiusInputBar";

const MapPage = ({ user }) => (
  <MapProvider>
    <div className="d-flex justify-content-center align-items-center flex-wrap">
      <SearchBar />
      <RadiusInputBar />
      <div
        className="d-flex justify-content-center"
        style={{ height: "92vh", width: "100%" }}
      >
        <div className="GoogleMap-container w-75 mr-3">
          <div
            className="MapPage d-flex justify-content-center align-items-center"
            style={{ height: "92vh" }}
          >
            <GoogleMap user={user} />
          </div>
        </div>
        <div
          className="RestList-container w-25 ml-3"
          style={{ overflow: "scroll" }}
        >
          <RestList />
        </div>
      </div>

      {/* <div className="red">
      <Test />
    </div> */}
    </div>
  </MapProvider>
);

export default MapPage;
