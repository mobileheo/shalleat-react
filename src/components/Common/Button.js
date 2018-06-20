import React from "react";
import anime from "animejs";

export const Button = props => {
  return <button className={props.class}>{props.name}</button>;
};
