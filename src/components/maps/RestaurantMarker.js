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
  transform: "translate(-50%, -50%)"
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

const scrollToTarget = chosenId => {
  const targetContainer = document.querySelector(".RestList");
  const targetChild = document.querySelector(`#${chosenId}`);
  targetContainer.scrollTo({
    top: targetChild.offsetTop - targetContainer.offsetTop,
    behavior: "smooth"
  });
};

const getSchedule = async (placeId, filters) => {
  try {
    const schedule = await Restaurant.getSchedule(placeId, filters);
    return schedule;
  } catch (error) {
    console.log(error);
  }
};

const getDetail = async placeId => {
  try {
    const detail = await Restaurant.getDetail(placeId, [
      "formatted_phone_number",
      "international_phone_number",
      "price_level",
      "website",
      "photos"
    ]);
    return detail;
  } catch (error) {
    console.log(error);
  }
};
const getPhoto = async (photoId, maxWidth) => {
  try {
    const { photoUrl } = await Restaurant.getPhoto(photoId, maxWidth);
    return photoUrl;
  } catch (error) {
    console.log(error);
  }
};

class RestaurantMarker extends React.PureComponent {
  state = {
    loading: true,
    schedule: {},
    detail: {},
    photoUrls: []
  };

  setSchedule = options => {
    if (this._isMounted) {
      this.setState(options);
    }
  };
  setDetail = detail => {
    if (this._isMounted) {
      this.setState(detail);
    }
  };
  setPhotoUrls = photoUrls => {
    if (this._isMounted) {
      this.setState(photoUrls);
    }
  };

  async componentDidMount() {
    this._isMounted = true;
    const { placeId, filters } = this.props;
    try {
      const schedule = await getSchedule(placeId, filters);
      const detail = await getDetail(placeId);
      await this.setDetail({ detail });
      await this.setSchedule({ schedule, loading: false });
      const { photos } = detail;

      if (photos) {
        const photoUrls = photos.map(async ({ photo_reference: id }) => {
          try {
            return await getPhoto(id, 250);
          } catch (error) {
            console.log(error);
          }
        });
        Promise.all(photoUrls).then(urls =>
          this.setPhotoUrls({ photoUrls: urls })
        );
      }
    } catch (error) {
      console.log(error);
    }
  }

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
      vicinity,
      popover,
      setPopover,
      setCenter,
      setZoom,
      index,
      openNow
    } = this.props;
    const { chosenId, isOpen } = popover;

    return loading && false ? (
      <Spinner name="ball-scale-multiple" color="#2196f3" />
    ) : (
      <div
        className="RestaurantMarker d-flex justify-content-center"
        style={MARKER_STYLE}
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

                scrollToTarget(placeId);
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
          {popover.chosenId === placeId && popover.isOpen ? (
            <RestaurantInfoBox
              placeId={placeId}
              name={name}
              icon={icon}
              vicinity={vicinity}
              schedule={schedule}
              popover={popover}
              photoUrls={this.state.photoUrls}
              detail={this.state.detail}
              lat={lat}
              lng={lng}
            />
          ) : (
            <div />
          )}
        </Tooltip>
      </div>
    );
  }
}

export default RestaurantMarker;
