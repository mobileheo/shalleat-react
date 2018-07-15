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

const RestItem = props => {
  // console.log(props);
  const { restaurant, index, popover, setPopover, setCenter, setZoom } = props;
  const {
    geometry,
    name,
    opening_hours: hours = {},
    rating,
    place_id: placeId
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
        id={`list-item-${placeId}`}
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
          setZoom(300);

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
          <div className="d-flex align-items-center mb-2">
            <i className="material-icons mr-1" style={{ fontSize: "2.7vh" }}>
              restaurant
            </i>
            <span
              className="font-weight-bold mr-1"
              style={{
                fontSize: "2.3vh",
                width: "15vw",
                textOverflow: "ellipsis",
                overflow: "hidden",
                whiteSpace: "nowrap"
              }}
            >
              {name}
            </span>
          </div>
          <div className="d-flex align-items-center">
            <RestRating rating={rating} />
            <span
              className="ml-2 font-weight-bold"
              style={{ transform: "translateY(-1.5px)", fontSize: "2.1vh" }}
            >
              {rating}
            </span>
          </div>
        </div>
        <div className="arrow-container d-flex justify-content-end">
          <div className="expansion-panel-icon ml-0 text-black-secondary">
            <i className="collapsed-show material-icons">keyboard_arrow_down</i>
            <i className="collapsed-hide material-icons">keyboard_arrow_up</i>
          </div>
        </div>
      </a>
      <ReveiwList
        chosenId={chosenId}
        placeId={placeId}
        isOpen={isOpen}
        {...props}
      />
    </Animated>
  );
};

export default RestItem;
