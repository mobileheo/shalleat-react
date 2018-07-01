import React from "react";
import { MapConsumer } from "../context/MapContext";

const WIDTH = "50px";
const HEIGHT = WIDTH;

const addSvgIcon = currentPositionBtn => {
  // currentPositionBtn.innerHTML = `
  //   <svg version="1.1" id="Layer_1" x="0px" y="0px"
  //      viewBox="0 0 250 250" style="enable-background:new 0 0 250 250;" xml:space="preserve">
  //   <style type="text/css">
  //     .st0{fill:#FFFFFF;stroke:#000000;stroke-width:20;stroke-miterlimit:10;}
  //   </style>
  //   <polygon class="st0" points="0.5,128.3 251,-1 125.8,249.5 115.7,136.3 "/>
  //   </svg>
  //   `;
  currentPositionBtn.innerHTML = `
  <i class="material-icons">
  my_location
  </i>
    `;
};

const addStyle = currentPositionBtn => {
  currentPositionBtn.style.color = "#fff";
  // currentPositionBtn.style.background = "#9c27b0";
};

const convertFullScreenBtnToAnchor = fullScreenBtn => {
  let temp = fullScreenBtn.outerHTML.replace(
    `draggable="false" title="Toggle fullscreen view" aria-label="Toggle fullscreen view"`,
    `class="bg-light text-dark" id="current-position-btn"`
  );
  // temp = temp.replace(`/button`, `/a`);
  fullScreenBtn.outerHTML = temp;
  const currentPositionBtn = document.querySelector("#current-position-btn");
  return currentPositionBtn;
};

const AddCurrentPositionBtn = () => {
  let child = document.querySelector(".gm-fullscreen-control");
  if (child) {
    const fullScreenBtn = child.parentNode;
    const currentPositionBtn = convertFullScreenBtnToAnchor(fullScreenBtn);
    addSvgIcon(currentPositionBtn);
    addStyle(currentPositionBtn);
    currentPositionBtn.addEventListener("click", e => {
      console.log(e);
    });
  }
};

const CurrentMarker = ({ currentPosition, text }) => {
  AddCurrentPositionBtn();
  return (
    <MapConsumer>
      {({ currentPosition }) => (
        <div
          className="d-flex justify-content-center"
          style={{
            width: WIDTH,
            height: HEIGHT,
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
            <span className="badge badge-info">{text}</span>
          </div>
        </div>
      )}
    </MapConsumer>
  );
};

export default CurrentMarker;
