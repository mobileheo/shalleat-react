import React from "react";
import RestaurantInfoBox from "./RestaurantInfoBox";
import lifecycle from "react-pure-lifecycle";

// const methods = {
//   componentDidMount
// };

const RestaurantMarker = ({ place_id, icon, name }) => {
  return (
    <div className="RestaurantMarker">
      <div
        className="d-flex justify-content-center"
        style={{
          width: "50px",
          height: "50px",
          transform: "translate(-25px, -25px)"
        }}
      >
        <div className="d-flex flex-column align-items-center">
          <img
            src={icon}
            style={{
              height: 40,
              width: 40
            }}
            alt={"marker-icon"}
          />
          <RestaurantInfoBox place_id={place_id} name={name} />
          <span className="badge badge-info">{name}</span>
        </div>
      </div>
    </div>
  );
};

export default RestaurantMarker;
