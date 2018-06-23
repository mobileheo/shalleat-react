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
      <i
        className="material-icons text-info"
        style={{
          fontSize: "36px",
          lineHeight: 1
        }}
      >
        person_pin
      </i>
      <span className="badge badge-info">{props.text}</span>
    </div>
  </div>
);

export default CurrentMarker;
