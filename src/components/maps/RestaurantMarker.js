import React from "react";

import RestaurantInfoBox from "./RestaurantInfoBox";

const RestaurantMarker = ({ id, icon, name }) => {
  return (
    <div>
      <div
        className="d-flex justify-content-center"
        style={{
          width: "50px",
          height: "50px",
          transform: "translate(-25px, -25px)"
        }}
      >
        <RestaurantInfoBox id={id} />
        <div className="d-flex flex-column align-items-center">
          <img
            src={icon}
            style={{
              height: 20,
              width: 20
            }}
            alt={"marker-icon"}
          />
          <span className="badge badge-info">{name}</span>
        </div>
      </div>
    </div>
  );
};

export default RestaurantMarker;
