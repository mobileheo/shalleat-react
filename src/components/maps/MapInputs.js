import React, { Component } from "react";
import RadiusInputBar from "./RadiusInputBar";
import SearchBar from "./SearchBar";

class MapInputs extends Component {
  render() {
    return (
      <form>
        <div className="d-flex justify-content-center align-items-center flex-wrap">
          <div className="GoogleMap-container w-75 mr-3">
            <RadiusInputBar />
          </div>
          <div className="RestList-container w-25 ml-3">
            <SearchBar />
          </div>
        </div>
      </form>
    );
  }
}

export default MapInputs;
