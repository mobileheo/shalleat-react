import React from "react";
import { MapConsumer } from "../context/MapContext";
import { Animated } from "react-animated-css";
import RestItem from "./RestItem";
const RestList = () => (
  <MapConsumer>
    {({ loading, listFilter, popover, setPopover, view, setView, radius }) =>
      loading ? null : listFilter().length === 0 ? (
        // <div style={{ height: "inherit !important" }}>
        <a
          className={"list-group-item list-group-item-action mb-2"}
          style={{ borderLeft: "solid #2196f3 5px" }}
        >
          <span>😿</span> No restaurants within {radius}m
        </a>
      ) : (
        <div
          className="RestList list-group h-100"
          style={{ overflow: "scroll" }}
        >
          {listFilter().map(r => (
            <RestItem
              restaurant={r}
              popover={popover}
              setPopover={setPopover}
              view={view}
              setView={setView}
            />
          ))}
        </div>
      )
    }
  </MapConsumer>
);

export default RestList;
