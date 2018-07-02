import React from "react";
import { Animated } from "react-animated-css";

const CLASS_NAME = "list-group-item list-group-item-action mb-2 ";
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
            ? CLASS_NAME.concat("bg-info text-white")
            : CLASS_NAME
        }
        // id={chosenId === placeId && isOpen ? chosenId : null}
        id={placeId}
        style={
          openNow
            ? { borderLeft: "solid #39e4a9 5px" }
            : { borderLeft: "solid #424242 5px" }
        }
        onClick={e => {
          // const target = document.querySelector(".RestList");
          // console.log(target.offsetTop);
          // console.log("offsetTop");
          // console.log(e.currentTarget.offsetTop);

          // target.scrollTo(0, e.currentTarget.offsetTop - target.offsetTop);
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
        <div className="col">
          <div className="row">
            <span>
              <i className="material-icons">restaurant</i>
              {name}
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
