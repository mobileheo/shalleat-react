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

  console.log(openNow);
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
            ? "list-group-item list-group-item-action bg-secondary text-white mb-2"
            : "list-group-item list-group-item-action mb-2"
        }
        style={
          openNow
            ? { borderLeft: "solid #4caf50 5px" }
            : { borderLeft: "solid #f44336 5px" }
        }
        onClick={() => {
          setCenter({ lat, lng });
          setZoom(14);

          if (!chosenId) {
            setPopover(placeId, !isOpen);
          }

          if (isOpen) {
            if (chosenId === placeId) {
              setPopover(placeId, !isOpen);
            } else {
              setPopover(placeId, isOpen);
            }
          } else {
            if (chosenId === placeId) {
              setPopover(placeId, !isOpen);
            }
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
