import React from "react";
import { MapConsumer } from "../context/MapContext";
import { Animated } from "react-animated-css";
const RestList = ({ popover, setPopover, view, setView, restaurant }) => {
  const {
    geometry,
    name,
    vicinity,
    rating,
    place_id: placeId,
    types
  } = restaurant;
  const { lat, lng } = geometry.location;
  const { chosenId, isOpen } = popover;
  console.log(restaurant);
  return (
    <Animated
      animationIn="fadeInLeft"
      animationOut="fadeOutRight"
      isVisible={true}
    >
      <a
        className={
          chosenId === placeId && isOpen
            ? "list-group-item list-group-item-action bg-secondary text-white mb-2"
            : "list-group-item list-group-item-action mb-2"
        }
        key={placeId}
        style={
          chosenId === placeId && isOpen
            ? { borderLeft: "solid #2196f3 5px" }
            : { borderLeft: "solid #ff4081 5px" }
        }
        onClick={() => {
          let { center, zoom } = view;
          center = { lat, lng };
          zoom = 13;
          setView(center, zoom);

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
