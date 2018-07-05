import React from "react";
import "react-tippy/dist/tippy.css";
import { MapConsumer } from "../context/MapContext";
const MIN_RADIUS = "0";
const MAX_RADIUS = "50000";
const RADIUS_STEP = "1";
const WAIT_INTERVAL = 1000;
const RADIUS = 1500;

const calcZoom = radius => {
  const scale = radius / 500;
  return +(16 - Math.log(scale) / Math.log(2));
};

class RadiusBar extends React.Component {
  state = {
    currentRadius: RADIUS
  };

  meterToKm = radius => {
    return `Within ${(radius / 1000).toFixed(1)} km`;
  };

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
                onChange={e => {
                  const { currentTarget } = e;
                  const currentRadius = +currentTarget.value;
                  this.setState({ currentRadius });
                  setRadius(currentRadius);
                  clearTimeout(this.timerId);
                  this.timerId = setTimeout(() => {
                    const zoom = calcZoom(currentRadius);
                    setRestaurants(currentRadius);
                    setZoom(zoom);
                  }, WAIT_INTERVAL);
                }}
              />
            </div>
          );
        }}
      </MapConsumer>
    );
  }
}

export default RadiusBar;
