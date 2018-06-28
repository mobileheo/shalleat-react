import React from "react";
import { MapConsumer } from "../context/MapContext";
const RestList = ({}) => (
  <MapConsumer>
    {({ restaurants, popover, setPopover }) => (
      <div class="RestList list-group">
        {restaurants.map(
          ({ name, vicinity, rating, place_id: placeId, types }) => (
            <a
              className="list-group-item list-group-item-action"
              key={placeId}
              style={{ border: "1px solid black" }}
              onClick={() => {
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
          )
        )}
      </div>
    )}
  </MapConsumer>
);

export default RestList;
