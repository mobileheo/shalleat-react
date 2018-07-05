import React, { Component } from "react";
import { MapConsumer } from "../context/MapContext";

const DEFAULT_CLASS =
  "nav-link d-flex align-items-center bg-transparent border border-white mx-3 px-2";
const WAIT_INTERVAL = 1500;

const shuffle = a => {
  let j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
};

class PickBtn extends Component {
  componentWillMount() {
    clearTimeout(this.timerId);
  }

  render() {
    return (
      <MapConsumer>
        {({ fetched, restaurants, popover, setPopover }) => {
          const handleClick = e => {
            e.preventDefault();
            if (fetched) {
              const places = shuffle(
                restaurants.map(({ place_id }) => place_id)
              );
              // places.forEach((placeId, i) => {
              //   const id = `#Popover-${placeId}`;
              //   this.timerId = setTimeout(function() {
              //     document.querySelector(id).classList.add("bg-primary");
              //     document.querySelector(id).classList.add("text-dark");
              //     // }, 100 * i * i * 0.1);
              //   }, 10 * i * i ** 0.5);
              //   this.timerId = setTimeout(function() {
              //     document.querySelector(id).classList.remove("bg-primary");
              //     document.querySelector(id).classList.remove("text-dark");
              //     // }, 150 * i * i * 0.1);
              //   }, 12 * i * i ** 0.5);
              // });
              const chosenId = places.pop();
              console.log("chosenId => ", chosenId);

              const { isOpen } = popover;
              console.log("isOpen => ", isOpen);
              setPopover(chosenId, !isOpen);
            }
          };
          return (
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
              Pick one for me
            </a>
          );
        }}
      </MapConsumer>
    );
  }
}

export default PickBtn;
