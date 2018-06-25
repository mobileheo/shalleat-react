import React, { Component } from "react";
import { withState } from "recompose";
import { Popover, PopoverHeader, PopoverBody } from "reactstrap";
import moment from "moment";
import "moment-precise-range-plugin";

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
  const currentTime = moment().format("HH:mm:ss");
  const currentTimes = moment().format("YYYY-MM-DD HH:mm:ss");
  if (isOpenToday) {
    if (isOpenNow) {
      const { time } = todayHours.close;
      console.log(time);
    } else {
      const { time } = todayHours.open;

      console.log(
        moment("2014-01-01 12:00:00").preciseDiff("2015-03-04 16:05:06")
      );
    }
  }
  return "test";
};

const RestaurantInfoBox = ({ placeId, name, schedule, popoverOpen }) => (
  <div variant="RestaurantInfoBox">
    <Popover
      placement="auto"
      isOpen={popoverOpen}
      target={`Popover-${placeId}`}
    >
      <PopoverHeader>{name}</PopoverHeader>
      <PopoverBody>{schedule.name}</PopoverBody>
      <span>{moment().format("HHmm")}</span>
      <span>{timeHelper(textObj)}</span>
    </Popover>
  </div>
);

export default RestaurantInfoBox;
