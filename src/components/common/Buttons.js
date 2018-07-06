import React from "react";
import anime from "animejs";

const fingerPrint = `<i class="material-icons" id="icon-fingerprint">fingerprint</i>`;

const animation = e => {
  const { currentTarget } = e;
  anime({
    targets: currentTarget,
    duration: 1000,
    borderRadius: ["0em", "2em"],
    opacity: [0.5, 1],
    backgroundColor: "#4CAE4F",
    easing: "easeInOutCubic",
    update: function() {
      currentTarget.innerHTML = fingerPrint;
    }
  }).finished.then(() => {
    anime({
      targets: "#icon-fingerprint",
      duration: 500,
      scale: 1.3,
      direction: "alternate",
      easing: "easeInBack"
    });
  });
};

export const Button = props => {
  return (
    <button onClick={animation} type={props.type} className={props.class}>
      {props.name}
    </button>
  );
};

export const aButton = props => {
  return (
    <a type={(props.type = "button")} className={props.class} role="button">
      {props.name}
    </a>
  );
};

export const inputButton = props => {
  return <input type={props.type} className={props.class} value={props.name} />;
};
