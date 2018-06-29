import React from "react";
import GoogleMap from "../maps/GoogleMap";
import RestList from "../restaurants/RestList";
// import Test from "../../Test";
import { MapProvider } from "../context/MapContext";
import RadiusInputBar from "../maps/RadiusInputBar";
import MapInputs from "../maps/MapInputs";

const MainPage = ({ user }) => (
  <MapProvider>
    <div className="d-flex justify-content-center align-items-center flex-wrap">
      {/* <MapInputs /> */}
      <div
        className="d-flex justify-content-center"
        style={{ height: "92vh", width: "100%" }}
      >
        <div className="GoogleMap-container w-75 mr-3">
          <div
            className="MapPage d-flex flex-column justify-content-center align-items-center"
            style={{ height: "92vh" }}
          >
            <RadiusInputBar />
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

export default MainPage;
