import React from "react";
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
  transform: "translate(-50%, -50%)",
  zIndex: "4"
};
const BTN_CLASS =
  "btn d-flex justify-content-center align-items-center text-white";
const defaultStyle = {
  minWidth: "37px",
  transition: "transform 0.5s ease-in-out"
};

const btnStyle = openNow => {
  return openNow
    ? {
        ...defaultStyle,
        backgroundColor: "#39e4a9"
      }
    : {
        ...defaultStyle,
        backgroundColor: "#424242"
      };
};

const FILTERS = [
  "name",
  "opening_hours",
  "formatted_phone_number",
  "international_phone_number",
  "price_level",
  "website",
  "photos",
  "reviews"
];

class RestaurantMarker extends React.PureComponent {
  constructor(props) {
    super(props);
    this.markerRef = React.createRef();
  }
  state = {
    markerLoading: true,
    schedule: null,
    details: {}
  };

  async componentDidMount() {
    try {
      this._isMounted = true;
      const { placeId } = this.props;
      const { schedule, details } = await Restaurant.getDetails(
        placeId,
        FILTERS
      );
      if (this._isMounted) {
        await this.setState({ details, schedule, markerLoading: false });
      }
    } catch (error) {
      console.log(error);
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  handleParentZindex = () => {
    this.markerRef.current.parentNode.style.zIndex = 10;
  };

  render() {
    const {
      placeId,
      location,
      index,
      setZoom,
      popover,
      setCenter,
      setPopover,
      scrollToTop,
      restaurant
    } = this.props;
    const { opening_hours: openHours = {}, name } = restaurant;
    const { open_now: openNow = false } = openHours;
    const { chosenId, isOpen } = popover;
    return this.state.markerLoading ? (
      <Spinner name="ball-scale-multiple" color="#2196f3" />
    ) : (
      <div
        className="RestaurantMarker d-flex justify-content-center"
        style={MARKER_STYLE}
        ref={this.markerRef}
      >
        <Tooltip
          title={name}
          arrow={true}
          position="auto"
          style={{
            width: "inherit",
            height: "inherit"
          }}
        >
          <Animated
            animationIn="bounceIn"
            animationOut="bounceOut"
            animationInDelay={index * 150}
            isVisible={true}
          >
            <button
              data-tippy
              id={`Popover-${placeId}`}
              className={
                chosenId === placeId && isOpen
                  ? BTN_CLASS.concat(" border border-white")
                  : BTN_CLASS.concat(" border border-transparent")
              }
              style={
                chosenId === placeId && isOpen
                  ? {
                      ...defaultStyle,
                      backgroundColor: "#ff4081",
                      transform: "scale(1.3)"
                    }
                  : {
                      ...btnStyle(openNow),
                      transform: "scale(1.0)"
                    }
              }
              onClick={async () => {
                setCenter(location);
                setZoom(300);

                if (isOpen) {
                  if (chosenId === placeId) {
                    await setPopover(placeId, !isOpen);
                  } else {
                    await setPopover(placeId, isOpen);
                  }
                } else {
                  await setPopover(placeId, !isOpen);
                }
                this.handleParentZindex();
                await scrollToTop();
              }}
              alt={"marker-icon"}
            >
              <i className="material-icons">
                {chosenId === placeId && isOpen
                  ? "restaurant_menu"
                  : "restaurant"}
              </i>
            </button>
          </Animated>
          {chosenId === placeId && isOpen ? (
            <RestaurantInfoBox {...this.state} {...this.props} />
          ) : (
            <div />
          )}
        </Tooltip>
      </div>
    );
  }
}

export default RestaurantMarker;
