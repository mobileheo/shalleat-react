import React from "react";

const CurrentMarker = props => (
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
        src={props.icon}
        style={{
          height: 20,
          width: 20
        }}
      />
      <span className="badge badge-info">{props.name}</span>
    </div>
  </div>
);

export default CurrentMarker;
