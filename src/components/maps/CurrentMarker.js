import React from "react";
import { Animated } from "react-animated-css";

const WIDTH = "50px";
const HEIGHT = WIDTH;

const addSvgIcon = currLocationBtn => {
  // currLocationBtn.innerHTML = `
  //   <svg version="1.1" id="Layer_1" x="0px" y="0px"
  //      viewBox="0 0 250 250" style="enable-background:new 0 0 250 250;" xml:space="preserve">
  //   <style type="text/css">
  //     .st0{fill:#FFFFFF;stroke:#000000;stroke-width:20;stroke-miterlimit:10;}
  //   </style>
  //   <polygon class="st0" points="0.5,128.3 251,-1 125.8,249.5 115.7,136.3 "/>
  //   </svg>
  //   `;
  currLocationBtn.innerHTML = `
  <i class="material-icons">
  my_location
  </i>
    `;
};

const addStyle = currLocationBtn => {
  currLocationBtn.style.color = "#fff";
  // currLocationBtn.style.background = "#9c27b0";
};

const convertFullScreenBtnToAnchor = fullScreenBtn => {
  let temp = fullScreenBtn.outerHTML.replace(
    `draggable="false" title="Toggle fullscreen view" aria-label="Toggle fullscreen view"`,
    `class="bg-light text-dark" id="current-Location-btn"`
  );

  fullScreenBtn.outerHTML = temp;
  const currLocationBtn = document.querySelector("#current-Location-btn");
  return currLocationBtn;
};

const addCurrLocationBtn = (
  currentLocation,
  setCenter,
  setZoom,
  setPopover
) => {
  let child = document.querySelector(".gm-fullscreen-control");
  if (child) {
    const fullScreenBtn = child.parentNode;
    const currLocationBtn = convertFullScreenBtnToAnchor(fullScreenBtn);
    addSvgIcon(currLocationBtn);
    addStyle(currLocationBtn);
    currLocationBtn.addEventListener("click", async e => {
      console.log(currentLocation);
      await setCenter(currentLocation);
      await setZoom(14);
      console.log(setPopover);
      await setPopover(null, false);
    });
  }
};

const CurrentMarker = ({ lat, lng, text, setCenter, setZoom, setPopover }) => {
  // console.log(setPopover);
  const currLocation = { lat, lng };
  addCurrLocationBtn(currLocation, setCenter, setZoom, setPopover);
  return (
    <Animated
      animationIn="zoomIn"
      animationOut="bounceOut"
      animateOnMount={true}
      isVisible={true}
    >
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
    </Animated>
  );
};

export default CurrentMarker;
