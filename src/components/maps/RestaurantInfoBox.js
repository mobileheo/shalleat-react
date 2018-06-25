import React, { Component } from "react";
import { withState } from "recompose";
import { Button, Popover, PopoverHeader, PopoverBody } from "reactstrap";

const enhance = withState("popoverOpen", "setPopover", false);
const RestaurantInfoBox = enhance(
  ({ placeId, name, schedule, popoverOpen, setPopover }) => (
    <div>
      <Button
        id={`Popover-${placeId}`}
        onClick={() => setPopover(!popoverOpen)}
      >
        {name}
      </Button>
      <Popover
        placement="auto"
        isOpen={popoverOpen}
        target={`Popover-${placeId}`}
      >
        <PopoverHeader>Popover Title</PopoverHeader>
        <PopoverBody>{schedule}</PopoverBody>
      </Popover>
    </div>
  )
);

export default withState("popoverOpen", "toggle", false)(RestaurantInfoBox);
