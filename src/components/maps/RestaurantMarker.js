import React from "react";
import Spinner from "../common/Spinner";
import RestaurantInfoBox from "./RestaurantInfoBox";
import Restaurant from "../../requests/restaurant"; //class for fetch restaurant

class RestaurantMarker extends React.PureComponent {
  state = {
    loading: true,
    schedule: {}
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
    // console.log("placeId => ", this.props.placeId);
    // console.log("center => ", this.props.lat);
    // console.log("-----------------------------");
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
    return loading ? (
      <Spinner />
    ) : (
      <div className="RestaurantMarker">
        <div
          className="d-flex justify-content-center"
          style={{
            width: "50px",
            height: "50px",
            transform: "translate(-50%, -50%)"
          }}
        >
          <button
            id={`Popover-${placeId}`}
            className={"btn d-flex justify-content-center align-items-center"}
            style={{
              minWidth: "50px",
              borderRadius: "1rem"
            }}
            onClick={() => {
              let { center, zoom } = view;
              center = { lat, lng };
              zoom = 15;
              setView(center, zoom);
              console.log(view);
              const { chosenId, isOpen } = popover;
              if (isOpen) {
                if (chosenId === placeId) {
                  setPopover(placeId, !isOpen);
                } else {
                  setPopover(placeId, isOpen);
                }
              } else {
                if (chosenId === placeId) {
                  setPopover(placeId, !isOpen);
                } else {
                  setPopover(placeId, !isOpen);
                }
              }
            }}
            alt={"marker-icon"}
          >
            <img
              src={icon}
              style={{
                position: "absolute",
                height: 40,
                width: 40
              }}
              alt={"marker-icon"}
            />
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
