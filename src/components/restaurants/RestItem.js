import React from "react";
import { Animated } from "react-animated-css";
import RestRating from "./RestRating";
import ReveiwList from "./ReviewList";

const CLASS_NAME =
  "d-flex justify-content-between list-group-item list-group-item-action mb-2 p-2";
const LIST_STYLE = {
  transition: "background-color 0.25s ease-in-out",
  padding: "1rem"
};
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
        aria-expanded="false"
        data-toggle="collapse"
        className={
          chosenId === placeId && isOpen
            ? CLASS_NAME.concat(
                "list-item-container bg-info text-white shadow "
              )
            : CLASS_NAME.concat("text-dark collapsed")
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
        <div className="meta-data-container">
          <div className="d-flex align-items-center">
            <i
              className="material-icons mr-1"
              style={{ fontSize: "1.8vh", transform: "translateY(-1px)" }}
            >
              restaurant
            </i>
            <span
              className="font-weight-bold mr-1"
              style={{
                fontSize: "1.5vh",
                transform: "translateY(-1px)",
                width: "6vw",
                textOverflow: "ellipsis",
                overflow: "hidden",
                whiteSpace: "nowrap"
              }}
            >
              {name}
            </span>
            <RestRating rating={rating} />
            <span
              className="ml-1 font-weight-bold"
              style={{ transform: "translateY(-1px)", fontSize: "1.5vh" }}
            >
              {rating}
            </span>
          </div>
          <div className="d-flex align-items-center">
            <i className="material-icons mr-1" style={{ fontSize: "1.8vh" }}>
              location_on
            </i>
            <span className="font-weight-light" style={{ fontSize: "1.5vh" }}>
              {vicinity}
            </span>
          </div>
        </div>
        <div className="arrow-container d-flex justify-content-end">
          <div class="expansion-panel-icon ml-0 text-black-secondary">
            <i class="collapsed-show material-icons">keyboard_arrow_down</i>
            <i class="collapsed-hide material-icons">keyboard_arrow_up</i>
          </div>
        </div>
      </a>
      <ReveiwList chosenId={chosenId} placeId={placeId} isOpen={isOpen} />
    </Animated>
  );
};

export default RestList;
