import React, { Component } from "react";
import "react-tippy/dist/tippy.css";
import { MapConsumer } from "../context/MapContext";
const MIN_RADIUS = "0";
const MAX_RADIUS = "50000";
const RADIUS_STEP = "1";
const WAIT_INTERVAL = 1000;
const RADIUS = 1500;

class RadiusBar extends Component {
  state = {
    currentRadius: RADIUS
  };

  meterToKm(radius) {
    return `Within ${(radius / 1000).toFixed(1)} km`;
  }

  handleOnChange(e, setRestaurants, setRadius, setZoom) {
    const { currentTarget } = e;
    const currentRadius = +currentTarget.value;
    this.setState({ currentRadius });
    setRadius(currentRadius);
    clearTimeout(this.timerId);
    this.timerId = setTimeout(() => {
      setRestaurants(currentRadius);
      setZoom(currentRadius);
    }, WAIT_INTERVAL);
  }

  componentWillMount() {
    clearTimeout(this.timerId);
  }

  render() {
    return (
      <MapConsumer>
        {({ loading, setRestaurants, radius, setRadius, setZoom }) => {
          return loading ? null : (
            <div className="RadiusInputBar">
              <div className="d-flex justify-content-center">
                <label
                  className="bg-dark text-white font-weight-normal px-3 py-1 rounded"
                  htmlFor="radius"
                  style={{
                    fontSize: "1.4vh"
                  }}
                >
                  {this.meterToKm(radius)}
                </label>
              </div>
              <input
                type="range"
                className="custom-range"
                min={MIN_RADIUS}
                max={MAX_RADIUS}
                step={RADIUS_STEP}
                value={radius}
                style={{ transform: "translateY(-3.5px)" }}
                onChange={e =>
                  this.handleOnChange(e, setRestaurants, setRadius, setZoom)
                }
              />
            </div>
          );
        }}
      </MapConsumer>
    );
  }
}

export default RadiusBar;
