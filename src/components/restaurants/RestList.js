import React from "react";
import { MapConsumer } from "../context/MapContext";
const RestList = ({}) => (
  <MapConsumer>
    {({ restaurants, popover, setPopover, view, setView }) => (
      <div className="RestList list-group">
        {restaurants.map(
          ({ geometry, name, vicinity, rating, place_id: placeId, types }) => {
            const { lat, lng } = geometry.location;
            return (
              <a
                className="list-group-item list-group-item-action"
                key={placeId}
                style={{ border: "1px solid black" }}
                onClick={() => {
                  let { center, zoom } = view;
                  console.log("onClick => ", center);
                  center = { lat, lng };
                  zoom = 16;
                  setView(center, zoom);
                  console.log(view);
                  const { chosenId, isOpen } = popover;
                  if (isOpen) {
                    if (chosenId === placeId) {
                      setPopover(placeId, !isOpen);
                    } else {
                      setPopover(placeId, isOpen);
                    }
                  } else {
                    if (chosenId === placeId) {
                      setPopover(placeId, !isOpen);
                    } else {
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
            );
          }
        )}
      </div>
    )}
  </MapConsumer>
);

export default RestList;
