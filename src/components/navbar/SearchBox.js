import React, { Component } from "react";
import { MapConsumer } from "../context/MapContext";

const WAIT_INTERVAL = 1500;
const UNIT_REGEX = /(\d+\.?\d{0,9}|\.\d{0,2})(miles|mile|m|cm|km|inch|yard|foot)/;

const calcZoom = radius => {
  const scale = radius / 500;
  return +(16 - Math.log(scale) / Math.log(2));
};

const getTypeOnly = input => {
  const [type] = input.split(" in");
  return type;
};
const extractRadius = input => {
  let [rangeStr, radius, unit] = input.match(UNIT_REGEX) || ["noMatch"];
  console.log(rangeStr);
  if (radius) {
    switch (unit) {
      case "mile" || "miles":
        radius = radius * 1609.34;
        break;
      case "cm":
        radius = radius * 0.01;
        break;
      case "km":
        radius = radius * 1000;
        break;
      case "inch":
        radius = radius * 0.0254;
        break;
      case "yard":
        radius = radius * 0.9144;
        break;
      case "foot":
        radius = radius * 0.3048;
        break;
      default:
        break;
    }
    return ~~radius;
  }
  return null;
};

class SearchBox extends Component {
  componentWillMount() {
    clearTimeout(this.timerId);
  }

  render() {
    return (
      <MapConsumer>
        {({
          setKeyword,
          setTypeKeyword,
          setZoom,
          radius,
          setRadius,
          currentLocation,
          setCenter,
          setPopover
        }) => {
          const handleInput = e => {
            e.preventDefault();

            const { value: input } = e.currentTarget;
            const type = getTypeOnly(input);
            const newRadius = extractRadius(input) || radius;
            clearTimeout(this.timerId);

            this.timerId = setTimeout(() => {
              setPopover(null, false);
              setKeyword("");
              setCenter(currentLocation);
              setZoom(calcZoom(newRadius));
              setRadius(newRadius);
              setTypeKeyword(type);
            }, WAIT_INTERVAL);
          };
          return (
            <div className="form-group my-0 mr-6">
              <div className="input-group">
                <input
                  className="form-control "
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  style={{ height: "36px" }}
                  onChange={handleInput}
                  onFocus={e => {
                    e.currentTarget.classList.add("border");
                    e.currentTarget.classList.add("border-secondary");
                  }}
                  onBlur={e => {
                    e.currentTarget.classList.remove("border");
                    e.currentTarget.classList.remove("border-secondary");
                  }}
                />
              </div>
            </div>
          );
        }}
      </MapConsumer>
    );
  }
}

export default SearchBox;
