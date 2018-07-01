import React from "react";
import "react-tippy/dist/tippy.css";
import { Tooltip } from "react-tippy";
import { MapConsumer } from "../context/MapContext";
// const bar = document.querySelector("input.custom-range");
const MIN_RADIUS = "0";
const MAX_RADIUS = "50000";
const RADIUS_STEP = "1";
const WAIT_INTERVAL = 1500;
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
        {({
          loading,
          setRestaurants,
          radius,
          setRadius,
          currentLocation,
          setView,
          view
        }) => {
          const { currentRadius } = this.state;

          return loading ? null : (
            <div className="RadiusInputBar">
              <label className="badge badge-secondary" htmlFor="radius">
                {this.meterToKm(currentRadius)}
              </label>
              <Tooltip
                title={`${this.meterToKm(currentRadius)}`}
                followCursor={true}
                arrow={true}
                position="top"
              >
                <input
                  type="range"
                  className="custom-range"
                  min={MIN_RADIUS}
                  max={MAX_RADIUS}
                  step={RADIUS_STEP}
                  value={currentRadius}
                  onChange={e => {
                    const { currentTarget } = e;
                    const currentRadius = +currentTarget.value;
                    this.setState({ currentRadius });
                    clearTimeout(this.timerId);
                    this.timerId = setTimeout(() => {
                      setRestaurants(currentRadius);
                      setRadius(currentRadius);
                      const zoom = calcZoom(currentRadius);
                      setView(currentLocation, zoom);
                    }, WAIT_INTERVAL);
                  }}
                />
              </Tooltip>
            </div>
          );
        }}
      </MapConsumer>
    );
  }
}

export default RadiusBar;
