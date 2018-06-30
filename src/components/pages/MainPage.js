import React from "react";
import GoogleMap from "../maps/GoogleMap";
import RestList from "../restaurants/RestList";
// import Test from "../../Test";
import { MapProvider } from "../context/MapContext";
import RadiusInputBar from "../maps/RadiusInputBar";
import SerachBar from "../maps/SearchBar";

const MainPage = ({ user }) => (
  <MapProvider>
    <div className="input-container d-flex align-items-center">
      <div className="RadiusInputBar-container w-75">
        <RadiusInputBar />
      </div>

      <div
        className="SearchBar-container w-25 ml-3"
        style={{ marginBottom: "19px" }}
      >
        <SerachBar />
      </div>
    </div>
    <div className="d-flex">
      <div className="GoogleMap-container w-75">
        <GoogleMap user={user} />
      </div>
      <div
        className="RestList-container w-25 ml-3 px-2"
        style={{ overflow: "scroll" }}
      >
        <RestList />
      </div>
    </div>
  </MapProvider>
);

export default MainPage;
