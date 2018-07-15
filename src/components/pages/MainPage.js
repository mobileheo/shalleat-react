import React from "react";
import { Redirect } from "react-router-dom";
import GoogleMap from "../maps/GoogleMap";
import RestList from "../restaurants/RestList";
import RadiusBar from "../maps/RadiusBar";
import SerachBar from "../maps/SearchBar";

const MainPage = ({ user }) => {
  return !user ? (
    <Redirect to="/signin" />
  ) : (
    <div
      className="MainPage d-flex flex-column justify-content-center mb-4 mt-2 ml-4 mr-3"
      style={{ height: "91vh" }}
    >
      <div className="input-container d-flex align-items-center">
        <div className="RadiusBar-container w-75">
          <RadiusBar />
        </div>

        <div
          className="SearchBar-container w-25 ml-3"
          style={{ marginBottom: "19px" }}
        >
          <SerachBar />
        </div>
      </div>
      <div className="d-flex h-100">
        <div className="GoogleMap-container w-75 pt-2">
          <GoogleMap user={user} />
        </div>
        <div className="RestList-container w-25 ml-3">
          <RestList />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
