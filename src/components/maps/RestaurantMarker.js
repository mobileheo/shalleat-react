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
let BTN_STYLE = {
  minWidth: "37px",
  transition: "transform 0.25s ease-in-out"
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
        // await this.setPhotoUrls({ photoUrls });
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
      popover,
      setPopover,
      setCenter,
      setZoom,
      index
    } = this.props;
    const { chosenId, isOpen } = popover;

    return loading ? (
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
                      ...BTN_STYLE,
                      transform: "scale(1.2)"
                    }
                  : {
                      ...BTN_STYLE,
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
          </Animated>
          {popover.chosenId === placeId && popover.isOpen ? (
            <RestaurantInfoBox
              placeId={placeId}
              name={name}
              schedule={schedule}
              popover={popover}
              photoUrls={this.state.photoUrls}
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
