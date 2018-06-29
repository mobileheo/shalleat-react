import React from "react";
import "react-tippy/dist/tippy.css";
import { Tooltip } from "react-tippy";
import { MapConsumer } from "../context/MapContext";
// const bar = document.querySelector("input.custom-range");

const MIN_RADIUS = "50";
const MAX_RADIUS = "1000";
const RADIUS_STEP = "1";
const WAIT_INTERVAL = 1500;
const calcZoom = radius => {
  const scale = radius / 500;
  return +(16 - Math.log(scale) / Math.log(2));
  // return radius / 7;
};
class RadiusInputBar extends React.Component {
  // constructor(props) {
  //   super();

  //   this.state = {
  //     value: props.value
  //   };
  // }
  state = {
    currentRadius: this.props.radius
  };
  componentDidMount() {
    // document.querySelector("input.custom-range").value = 580;
  }
  componentWillMount() {
    this.timer = null;
  }

  updateRaidus(setRestaurants) {
    return e => {
      const { currentTarget } = e;
      const currentRadius = +currentTarget.value;
      // console.log(typeof currentRadius);
      // console.log("radius => ", currentRadius);
      // setMapLoading();

      // this.timer = await setTimeout(
      //   setRestaurants(currentRadius),
      //   WAIT_INTERVAL
      // );
      // await clearTimeout(this.timer);
      // document.querySelector("input.custom-range").value = radius;
    };
  }

  render() {
    return (
      <MapConsumer>
        {({ loading, setRestaurants, currentLocation, setView }) =>
          loading ? null : (
            <div className="RadiusInputBar w-100 mb-3 mt-4">
              <label htmlFor="radius">Within</label>
              <Tooltip
                title={`Within ${this.state.currentRadius}m`}
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
                  onChange={e => {
                    const { currentTarget } = e;
                    const currentRadius = +currentTarget.value;
                    this.setState({ currentRadius });
                    clearTimeout(this.timeout);
                    this.timer = setTimeout(() => {
                      setRestaurants(currentRadius);
                      const zoom = calcZoom(currentRadius);
                      setView(null, zoom);
                    }, WAIT_INTERVAL);
                  }}
                />
              </Tooltip>
            </div>
          )
        }
      </MapConsumer>
    );
  }
}

export default RadiusInputBar;
