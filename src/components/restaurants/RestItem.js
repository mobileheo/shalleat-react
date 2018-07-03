import React from "react";
import { Animated } from "react-animated-css";
import RestRating from "./RestRating";

const CLASS_NAME = "list-group-item list-group-item-action mb-2 ";
const LIST_STYLE = { transition: "background-color 0.25s ease-in-out" };
const RestList = ({
  restaurant,
  index,
  popover,
  setPopover,
  center,
  setCenter,
  zoom,
  setZoom,
  scrollTop
}) => {
  const {
    geometry,
    name,
    opening_hours: hours = {},
    vicinity,
    rating,
    place_id: placeId,
    types,
    target
  } = restaurant;

  const { lat, lng } = geometry.location;
  const { open_now: openNow } = hours;
  const { chosenId, isOpen } = popover;

  return (
    <Animated
      animationIn="fadeInRight"
      animationOut="fadeOutRight"
      isVisible={true}
      animationInDelay={index * 150}
    >
      <a
        className={
          chosenId === placeId && isOpen
            ? CLASS_NAME.concat("bg-info text-white shadow")
            : CLASS_NAME.concat("text-dark")
        }
        id={placeId}
        style={
          openNow
            ? {
                ...LIST_STYLE,
                borderLeft: "solid #39e4a9 5px"
              }
            : {
                ...LIST_STYLE,
                borderLeft: "solid #424242 5px"
              }
        }
        onClick={e => {
          e.preventDefault();

          setCenter({ lat, lng });
          setZoom(16);

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
      >
        <div className="col">
          <div className="row align-items-center">
            <i
              className="material-icons mr-1"
              style={{ fontSize: "1.8vh", transform: "translateY(-1px)" }}
            >
              restaurant
            </i>
            <span
              className="font-weight-bold mr-1"
              style={{ fontSize: "1.5vh", transform: "translateY(-1px)" }}
            >
              {name}
            </span>
            <RestRating rating={rating} />
            <span
              className="ml-1 font-weight-bold"
              style={{ transform: "translateY(-1px)" }}
            >
              {rating}
            </span>
          </div>
          {/* <div className="row align-items-start"> */}
          {/* <i class="material-icons" style={{ fontSize: "1.8vh" }}>
              rate_review
            </i> */}
          {/* </div> */}
          <div className="row align-items-center">
            <i className="material-icons mr-1" style={{ fontSize: "1.8vh" }}>
              location_on
            </i>
            <span className="font-weight-light" style={{ fontSize: "1.5vh" }}>
              {vicinity}
            </span>
          </div>
          {/* <div className="row">
            <i class="material-icons">location_on</i>
            <span>{rating}</span>
          </div>
          <div className="row bd-highlight">
            <i class="material-icons">location_on</i>
            <span>{vicinity}</span>
          </div>
          types:
          {types.map(type => <span key={`${placeId}-${type}`}>{type} </span>)} */}
        </div>
      </a>
    </Animated>
  );
};

export default RestList;
