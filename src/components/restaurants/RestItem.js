import React from "react";
import { MapConsumer } from "../context/MapContext";
import { Animated } from "react-animated-css";
const RestList = ({
  restaurant,
  index,
  popover,
  setPopover,
  center,
  setCenter,
  zoom,
  setZoom
}) => {
  const {
    geometry,
    name,
    opening_hours: hours = {},
    vicinity,
    rating,
    place_id: placeId,
    types
  } = restaurant;

  const { lat, lng } = geometry.location;
  const { open_now: openNow } = hours;
  // console.log(hours);

  // console.log(openNow);
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
            ? "list-group-item list-group-item-action bg-info text-white mb-2"
            : "list-group-item list-group-item-action mb-2"
        }
        style={
          openNow
            ? { borderLeft: "solid #39e4a9 5px" }
            : { borderLeft: "solid #e45439 5px" }
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
        }}
      >
        name: {name}
        address: {vicinity}
        rating: {rating}
        types:
        {types.map(type => <span key={`${placeId}-${type}`}>{type} </span>)}
      </a>
    </Animated>
  );
};

export default RestList;
