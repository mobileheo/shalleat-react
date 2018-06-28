import React from "react";
import anime from "animejs";
import Spinner from "../common/Spinner";
import RestaurantInfoBox from "./RestaurantInfoBox";
import Restaurant from "../../requests/restaurant"; //class for fetch restaurant
import "react-tippy/dist/tippy.css";
import { Tooltip } from "react-tippy";

const btnReTrun = id =>
  anime({
    targets: id,
    scale: 1.2,
    duration: 3000
  });

class RestaurantMarker extends React.PureComponent {
  state = {
    loading: true,
    schedule: {}
  };
  btnTrun = id => {
    let isRotated = false;
    console.log(isRotated);
    if (isRotated) {
      return () => {
        isRotated = !isRotated;
        anime({
          targets: id,
          scale: 1,
          duration: 3000,
          rotate: 45
        });
      };
    } else {
      return () => {
        isRotated = !isRotated;
        anime({
          targets: id,
          scale: 1,
          duration: 3000,
          rotate: 45
        });
      };
    }
  };

  componentDidMount() {
    this._isMounted = true;
    getSchedule(this.props.placeId, this.props.filters)
      .then(schedule => {
        this.setSchedule({ schedule, loading: false });
      })
      .catch(error => {
        console.log(error);
      });
  }

  setSchedule = options => {
    if (this._isMounted) {
      this.setState(options);
    }
  };

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const { loading, schedule } = this.state;
    const {
      placeId,
      icon,
      name,
      lat,
      lng,
      popover,
      setPopover,
      view,
      setView
    } = this.props;
    const { chosenId, isOpen } = popover;
    return loading ? (
      <Spinner />
    ) : (
      <div
        className="RestaurantMarker"
        style={chosenId === placeId && isOpen ? { zIndex: 1000000000 } : {}}
      >
        <div
          className="d-flex justify-content-center"
          style={{
            width: "50px",
            height: "50px",
            transform: "translate(-50%, -50%)"
          }}
        >
          <Tooltip
            title={name}
            arrow={true}
            position="top"
            style={{
              minWidth: "50px"
            }}
          >
            <button
              data-tippy
              data-original-title="I'm a tooltip!"
              id={`Popover-${placeId}`}
              className={
                "btn btn-secondary d-flex justify-content-center align-items-center rounded"
              }
              style={{
                minWidth: "50px",
                minHeight: "50px"
              }}
              onClick={() => {
                let { center, zoom } = view;
                center = { lat, lng };
                zoom = 16;
                setView(center, zoom);

                if (isOpen) {
                  if (chosenId === placeId) {
                    setPopover(placeId, !isOpen);
                  } else {
                    setPopover(placeId, isOpen);
                  }
                } else {
                  setPopover(placeId, !isOpen);
                }
              }}
              onMouseOver={e => {
                const { currentTarget } = e;
                console.log(currentTarget);
              }}
              alt={"marker-icon"}
            >
              {/* <img
              src={icon}
              style={{
                position: "absolute",
                height: 40,
                width: 40
              }}
              alt={"marker-icon"}
            /> */}
              <i
                className="material-icons"
                style={{
                  fontSize: "3.8vh"
                }}
              >
                {chosenId === placeId && isOpen
                  ? "restaurant_menu"
                  : "restaurant"}
              </i>
            </button>
            {popover.chosenId === placeId && popover.isOpen ? (
              <RestaurantInfoBox
                placeId={placeId}
                name={name}
                schedule={schedule}
                popover={popover}
              />
            ) : (
              <div />
            )}
          </Tooltip>
        </div>
      </div>
    );
  }
}

const getSchedule = async (placeId, filters) => {
  try {
    const schedule = await Restaurant.getSchedule(placeId, filters);

    return schedule;
  } catch (error) {
    console.log(error);
  }
};

export default RestaurantMarker;
