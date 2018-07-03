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
        <div className="arrow-container d-flex justify-content-end">
          <div class="expansion-panel-icon ml-0 text-black-secondary">
            <i class="collapsed-show material-icons">keyboard_arrow_down</i>
            <i class="collapsed-hide material-icons">keyboard_arrow_up</i>
          </div>
        </div>
      </a>
      {/* <Animated
        animationIn="fadeInRight"
        animationOut="fadeOutRight"
        isVisible={true}
        animationInDelay={index * 150}
      > */}
      <ReveiwList chosenId={chosenId} placeId={placeId} isOpen={isOpen} />
      {/* <div
        class={
          chosenId === placeId && isOpen
            ? "bg-dark text-white mb-2"
            : "collapse"
        }
      >
        <div class="expansion-panel-body">
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
          skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
          Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
          single-origin coffee nulla assumenda shoreditch et. Nihil anim
          keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
          sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
          occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt
          you probably haven't heard of them accusamus labore sustainable VHS.
        </div>
      </div> */}

      {/* </Animated> */}
    </Animated>
  );
};

export default RestList;
