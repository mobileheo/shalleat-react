import React from "react";
import anime from "animejs";
import "react-tippy/dist/tippy.css";
import { Tooltip } from "react-tippy";
import { Animated } from "react-animated-css";

import Spinner from "react-spinkit";
import RestaurantInfoBox from "./RestaurantInfoBox";
import Restaurant from "../../requests/restaurant"; //class for fetch restaurant

const WIDTH = "35px";
const HEIGHT = WIDTH;
const MARKER_STYLE = {
  width: WIDTH,
  height: HEIGHT,
  transform: "translate(-50%, -50%)"
};
const BTN_CLASS =
  "btn btn-secondary d-flex justify-content-center align-items-center";

class RestaurantMarker extends React.PureComponent {
  state = {
    loading: true,
    schedule: {}
  };

  componentDidMount() {
    this._isMounted = true;
    getSchedule(this.props.placeId, this.props.filters)
      .then(schedule => {
        this.setSchedule({ schedule, loading: false });
      })
      .catch(error => {
        console.log(error);
      });
  }

  setSchedule = options => {
    if (this._isMounted) {
      this.setState(options);
    }
  };

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const { loading, schedule } = this.state;
    const {
      placeId,
      icon,
      name,
      lat,
      lng,
      popover,
      setPopover,
      setCenter,
      setZoom,
      index
    } = this.props;
    const { chosenId, isOpen } = popover;
    return loading ? (
      <Spinner name="ball-scale-multiple" color="steelblue" />
    ) : (
      <Animated
        animationIn="bounceIn"
        animationOut="bounceOut"
        animationInDelay={index * 150}
        isVisible={true}
      >
        <div
          className="RestaurantMarker d-flex justify-content-center"
          style={MARKER_STYLE}
        >
          <Tooltip
            title={name}
            arrow={true}
            position="top"
            style={{
              width: "inherit",
              height: "inherit"
            }}
          >
            <button
              data-tippy
              id={`Popover-${placeId}`}
              className={
                chosenId === placeId && isOpen
                  ? BTN_CLASS.concat(" border border-white")
                  : BTN_CLASS.concat(" border border-secondary")
              }
              style={{
                minWidth: "37px",
                minHeight: "inherit"
              }}
              onClick={() => {
                setCenter({ lat, lng });
                setZoom(14);

                if (isOpen) {
                  if (chosenId === placeId) {
                    setPopover(placeId, !isOpen);
                  } else {
                    setPopover(placeId, isOpen);
                  }
                } else {
                  setPopover(placeId, !isOpen);
                }
              }}
              // onMouseOver={e => {
              //   const { currentTarget } = e;
              //   console.log(currentTarget);
              // }}
              alt={"marker-icon"}
            >
              {/* <img
                src={icon}
                style={{
                  position: "absolute",
                  height: 40,
                  width: 40
                }}
                alt={"marker-icon"}
              /> */}
              <i
                className="material-icons"
                // style={{
                //   fontSize: "2.5vh"
                // }}
              >
                {chosenId === placeId && isOpen
                  ? "restaurant_menu"
                  : "restaurant"}
              </i>
            </button>
            {popover.chosenId === placeId && popover.isOpen ? (
              <RestaurantInfoBox
                placeId={placeId}
                name={name}
                schedule={schedule}
                popover={popover}
              />
            ) : (
              <div />
            )}
          </Tooltip>
        </div>
      </Animated>
    );
  }
}

const getSchedule = async (placeId, filters) => {
  try {
    const schedule = await Restaurant.getSchedule(placeId, filters);

    return schedule;
  } catch (error) {
    console.log(error);
  }
};

export default RestaurantMarker;
