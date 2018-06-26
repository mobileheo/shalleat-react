import React from "react";

const Spinner = () => {
  return (
    <div className="progress-circular">
      <div className="progress-circular-wrapper">
        <div className="progress-circular-inner">
          <div className="progress-circular-left">
            <div className="progress-circular-spinner" />
          </div>
          <div className="progress-circular-gap" />
          <div className="progress-circular-right">
            <div className="progress-circular-spinner" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Spinner;
