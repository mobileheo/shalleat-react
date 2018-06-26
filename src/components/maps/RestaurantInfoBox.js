import React, { Component } from "react";
import { compose, withState, lifecycle } from "recompose";
import { Popover, PopoverHeader, PopoverBody } from "reactstrap";
import moment from "moment";
import "moment-precise-range-plugin";
import Spinner from "../common/Spinner";

const textObj = {
  name: "54th Ave Cafe",
  isOpenToday: true,
  isOpenNow: false,
  todayHours: {
    close: {
      day: 1,
      time: "2300"
    },
    open: {
      day: 1,
      time: "1100"
    }
  },
  nextDayHours: {
    close: {
      day: 2,
      time: "2300"
    },
    open: {
      day: 2,
      time: "1100"
    }
  },
  weekDays: [
    "Monday: 11:00 AM – 11:00 PM",
    "Tuesday: 11:00 AM – 11:00 PM",
    "Wednesday: 11:00 AM – 11:00 PM",
    "Thursday: 11:00 AM – 11:00 PM",
    "Friday: 11:00 AM – 11:00 PM",
    "Saturday: 11:00 AM – 11:00 PM",
    "Sunday: 11:00 AM – 11:00 PM"
  ]
};

const timeHelper = ({ notAvailable, isOpenToday, isOpenNow, todayHours }) => {
  if (notAvailable) return notAvailable;
  const currentTime = moment().format("YYYY-MM-DD HH:mm:ss");
  if (isOpenToday) {
    if (isOpenNow) {
      const { time } = todayHours.close;
      console.log(time);
    } else {
      const { time } = todayHours.open;
      const openhours = time.slice(0, 2) + ":" + time.slice(2);
      const openTime = moment().format(`YYYY-MM-DD ${openhours}:00`);
      return { openTime };
    }
  }
  return "test";
};
let timerID;
const currentTime = () => moment().format("YYYY-MM-DD HH:mm:ss");
const enhence = compose(
  withState("remainingTime", "setRemainingTime", ""),
  lifecycle({
    componentDidMount() {
      const { schedule, setRemainingTime } = this.props;
      const { openTime } = timeHelper(schedule);
      timerID = setInterval(
        () => setRemainingTime(moment(currentTime()).preciseDiff(openTime)),
        1000
      );
    },
    componentWillUnmount() {
      clearInterval(timerID);
    }
  })
);
const RestaurantInfoBox = enhence(
  ({ placeId, name, schedule, popoverOpen, remainingTime }) => (
    <div variant="RestaurantInfoBox">
      <Popover
        placement="auto"
        isOpen={popoverOpen}
        target={`Popover-${placeId}`}
      >
        <PopoverHeader>{name}</PopoverHeader>
        <PopoverBody>{schedule.name}</PopoverBody>
        <span>{remainingTime}</span>
      </Popover>
    </div>
  )
);

export default RestaurantInfoBox;
