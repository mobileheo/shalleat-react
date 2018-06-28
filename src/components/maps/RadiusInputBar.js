import React from "react";

const RadiusInputBar = () => (
  <div className="RadiusInputBar">
    <label for="radius">Radius</label>
    <input type="range" className="custom-range" min="0" max="5" step="0.1" />
  </div>
);

export default RadiusInputBar;
