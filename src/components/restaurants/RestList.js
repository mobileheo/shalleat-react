import React from "react";
import { MapConsumer } from "../context/MapContext";
import { Animated } from "react-animated-css";
import RestItem from "./RestItem";

const RestList = () => (
  <MapConsumer>
    {({
      center,
      setCenter,
      zoom,
      setZoom,
      loading,
      filteredRests,
      popover,
      setPopover,
      radius,
      scrollTop
    }) => {
      const restaurants = filteredRests();
      return loading ? null : restaurants.length === 0 ? (
        <a
          className={"list-group-item list-group-item-action mb-2"}
          style={{ borderLeft: "solid #2196f3 5px" }}
        >
          <span>😿</span> No restaurants within {radius}m
        </a>
      ) : (
        <div
          className="RestList list-group h-100 px-2 pt-2"
          style={{ overflow: "scroll" }}
        >
          {restaurants.map((r, i) => (
            <RestItem
              key={r.place_id}
              index={i}
              restaurant={r}
              center={center}
              setCenter={setCenter}
              zoom={zoom}
              setZoom={setZoom}
              popover={popover}
              setPopover={setPopover}
            />
          ))}
        </div>
      );
    }}
  </MapConsumer>
);

export default RestList;
