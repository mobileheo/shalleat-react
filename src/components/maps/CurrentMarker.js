import React from "react";
import { Animated } from "react-animated-css";

const WIDTH = "50px";
const HEIGHT = WIDTH;

const addSvgIcon = currLocationBtn => {
  currLocationBtn.innerHTML = `
  <i class="material-icons">
  my_location
  </i>
    `;
};

const addStyle = currLocationBtn => {
  currLocationBtn.style.color = "#fff";
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

const addCurrLocationBtn = (currentLocation, setCenter, setPopover) => {
  let child = document.querySelector(".gm-fullscreen-control");
  if (child) {
    const fullScreenBtn = child.parentNode;
    const currLocationBtn = convertFullScreenBtnToAnchor(fullScreenBtn);
    addSvgIcon(currLocationBtn);
    addStyle(currLocationBtn);
    currLocationBtn.addEventListener("click", async e => {
      await setPopover(null, false);
      await setCenter(currentLocation);
    });
  }
};

const CurrentMarker = ({
  lat,
  lng,
  text,
  radius,
  setCenter,
  setZoom,
  setPopover
}) => {
  const currLocation = { lat, lng };
  addCurrLocationBtn(currLocation, setCenter, setPopover);
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
