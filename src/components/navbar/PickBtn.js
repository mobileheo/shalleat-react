import React, { Component } from "react";
import { MapConsumer } from "../context/MapContext";
import { delay } from "../../helper/asyncHelper";

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
        {({
          fetched,
          restaurants,
          setCenter,
          setZoom,
          popover,
          setPopover
        }) => {
          const handleClick = async e => {
            e.preventDefault();
            // if (fetched) {
            const { chosenId, isOpen } = popover;
            const places = shuffle(
              restaurants.map(({ place_id: placeId, geometry }) => ({
                placeId,
                geometry
              }))
            );
            setPopover(null, !isOpen);
            places.forEach(async ({ placeId }, i) => {
              const id = `#Popover-${placeId}`;
              await delay((10 * i) ^ 1.3);
              document.querySelector(id).classList.add("bg-primary");
              document.querySelector(id).classList.add("text-dark");
              await delay((10 * i) ^ 1.3);
              document.querySelector(id).classList.remove("bg-primary");
              document.querySelector(id).classList.remove("text-dark");
            });
            await delay((10 * places.length) ^ 1.3);
            const { placeId, geometry } = places.pop();
            setPopover(placeId, true);

            // }
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
