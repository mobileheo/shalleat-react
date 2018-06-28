import React from "react";

const AddCurrentPositionButton = () => {
  let p = document.querySelector(".gm-fullscreen-control");
  if (p) {
    const target = p.parentNode;
    p.parentNode.setAttribute("id", "current-position-button");
    p.parentNode.innerHTML = `<i class="material-icons">my_location</i>`;
  }
};

const CurrentMarker = props => {
  AddCurrentPositionButton();
  return (
    <div
      className="d-flex justify-content-center"
      style={{
        width: "50px",
        height: "50px",
        transform: "translate(-50%, -50%)"
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
};

export default CurrentMarker;
