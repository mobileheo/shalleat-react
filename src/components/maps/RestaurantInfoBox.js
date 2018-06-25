import React, { Component } from "react";
import { withState } from "recompose";
import { Button, Popover, PopoverHeader, PopoverBody } from "reactstrap";

// const enhance = withState("popoverOpen", "setPopover", false);
const RestaurantInfoBox = ({ placeId, name, schedule, popoverOpen }) => (
  <div variant="RestaurantInfoBox">
    <Popover
      placement="auto"
      isOpen={popoverOpen}
      target={`Popover-${placeId}`}
    >
      <PopoverHeader>{name}</PopoverHeader>
      <PopoverBody>{schedule.name}</PopoverBody>
    </Popover>
  </div>
);

export default RestaurantInfoBox;
