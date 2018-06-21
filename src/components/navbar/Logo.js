import React from "react";
import anime from "animejs";
import lifecycle from "react-pure-lifecycle";

let morphingLogo = () =>
  anime({
    targets: "#logo-svg .polymorph",
    points: [
      {
        value:
          "0.4,115.7 121.7,48.7 84,240.4 55.9,107.8 232.1,201.8 93.4,186.8 240,53.2 182.4,176.5 96.8,0 199.3,90.5"
      },
      {
        value:
          "105.5,172.4 0,142.7 174.8,146.1 114.8,240.4 171.9,70.1 240.4,158 100.9,49.4 203.2,9.4 59.9,112.6 54.6,0 "
      }
    ],
    rotate: 360,
    easing: "easeInOutExpo",
    duration: 7000,
    loop: true
  });

let colorClosure = () => {
  let green = 0,
    isMax = false;
  return () => {
    document.querySelector(
      "#logo-svg polygon"
    ).style.fill = `rgb(255, ${green}, 0)`;
    !isMax ? ++green : --green;
    if (!(green > 0 == green < 255)) isMax = green === 255;
  };
};

let rotateClosure = () => {
  let deg = 0;
  return () => {
    document.querySelector(
      "#logo-svg polygon"
    ).style.transform = `rotate(${deg}deg)`;
    deg = deg === 360 || deg + 1;
  };
};

const componentDidMount = props => {
  let rotateLogo = rotateClosure();
  let changeLogoColor = colorClosure();

  morphingLogo();
  setInterval(() => {
    rotateLogo(), changeLogoColor();
  }, 30);
};

const methods = {
  componentDidMount
};

const Logo = () => {
  return (
    <svg
      id="logo-svg"
      viewBox="0 0 240.4 240.4"
      width="50"
      height="50"
      className="d-inline-block align-top"
    >
      <polygon
        className="polymorph"
        points="105.5,172.4 0,142.7 174.8,146.1 114.8,240.4 171.9,70.1 240.4,158 100.9,49.4 203.2,9.4 59.9,112.6 54.6,0 "
      />
    </svg>
  );
};

export default lifecycle(methods)(Logo);
