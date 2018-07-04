import React, { Component } from "react";
import { MapConsumer } from "../context/MapContext";

const DEFAULT_CLASS =
  "nav-link d-flex align-items-center bg-transparent border border-white mx-3 px-2";
const WAIT_INTERVAL = 1500;

class PickBtn extends Component {
  componentWillMount() {
    clearTimeout(this.timerId);
  }

  render() {
    return (
      <MapConsumer>
        {({
          setKeyword,
          setTypeKeyword,
          setZoom,
          radius,
          setRadius,
          currentLocation,
          setCenter
        }) => {
          const handleClick = e => {
            e.preventDefault();
            console.log(e);
            // const { value: input } = e.currentTarget;
            // const type = getTypeOnly(input);
            // const newRadius = extractRadius(input) || radius;
            // clearTimeout(this.timerId);

            // this.timerId = setTimeout(() => {
            //   setKeyword("");
            //   setCenter(currentLocation);
            //   setZoom(calcZoom(newRadius));
            //   setRadius(newRadius);
            //   setTypeKeyword(type);
            // }, WAIT_INTERVAL);
          };
          return (
            // <div className="form-group my-0 mr-6">
            //   <div className="input-group">
            //     <input
            //       className="form-control "
            //       type="search"
            //       placeholder="Search"
            //       aria-label="Search"
            //       style={{ height: "36px" }}
            //       onChange={handleClick}
            //       onFocus={e => {
            //         e.currentTarget.classList.add("border");
            //         e.currentTarget.classList.add("border-secondary");
            //       }}
            //       onBlur={e => {
            //         e.currentTarget.classList.remove("border");
            //         e.currentTarget.classList.remove("border-secondary");
            //       }}
            //     />
            //   </div>
            // </div>
            <a
              className={DEFAULT_CLASS}
              onClick={handleClick}
              onMouseEnter={e => {
                e.currentTarget.classList.add("border-secondary");
              }}
              onMouseLeave={e => {
                e.currentTarget.classList.remove("border-secondary");
              }}
            >
              Pick one for you
            </a>
          );
        }}
      </MapConsumer>
    );
  }
}

export default PickBtn;
