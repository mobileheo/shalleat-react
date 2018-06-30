import React from "react";
import { MapConsumer } from "../context/MapContext";
const RestList = () => (
  <MapConsumer>
    {({ loading, restaurants, popover, setPopover, view, setView, radius }) =>
      loading ? null : restaurants.length === 0 ? (
        // <div style={{ height: "inherit !important" }}>
        <a
          className={"list-group-item list-group-item-action mb-2"}
          style={{ borderLeft: "solid #2196f3 5px" }}
        >
          <span>😿</span> No restaurants within {radius}m
        </a>
      ) : (
        <div className="RestList list-group">
          {restaurants.map(
            ({
              geometry,
              name,
              vicinity,
              rating,
              place_id: placeId,
              types
            }) => {
              const { lat, lng } = geometry.location;
              const { chosenId, isOpen } = popover;
              return (
                // border border-secondary
                // <div
                //   className={
                //     chosenId === placeId && isOpen
                //       ? "bg-primary text-white"
                //       : "border"
                //   }
                // >
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
                  {types.map(type => (
                    <span key={`${placeId}-${type}`}>{type} </span>
                  ))}
                </a>
                // </div>
              );
            }
          )}
        </div>
      )
    }
  </MapConsumer>
);

export default RestList;
