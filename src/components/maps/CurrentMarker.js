import React from "react";
import { Animated } from "react-animated-css";

const WIDTH = "50px";
const HEIGHT = WIDTH;

const CurrentMarker = ({ text }) => {
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
