import React from "react";
import anime from "animejs";

const checkCircle = `<i class="material-icons btn-check">check_circle</i>`;

const animation = e => {
  e.preventDefault();
  const { currentTarget } = e;
  currentTarget.innerHTML = checkCircle;

  anime({
    targets: currentTarget,
    duration: 1000,
    borderRadius: ["0em", "2em"],
    opacity: [0.8, 1],
    backgroundColor: "#4CAE4F",
    easing: "easeInOutCubic",
    update: function() {
      currentTarget.innerHTML = checkCircle;
    }
  }).finished.then(() => {
    anime({
      targets: ".btn-check",
      duration: 500,
      translateY: -10,
      direction: "alternate",
      easing: "easeInBack"
    });
  });
  // .finished.then(() => {
  // const form = document.querySelector("form");
  // form.submit();
  // });
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
