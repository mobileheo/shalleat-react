import React, { Component } from "react";
import { withState } from "recompose";
import { Button, Popover, PopoverHeader, PopoverBody } from "reactstrap";
import Restaurant from "../../requests/restaurant";
// const restaurants = await Restaurant.findNearby(filters);
const enhance = withState("popoverOpen", "toggle", false);
const RestaurantInfoBox = enhance(({ place_id, name, popoverOpen, toggle }) => (
  <div>
    <Button
      id={`Popover-${place_id}`}
      onClick={() =>
        toggle(popoverOpen => {
          return !popoverOpen;
        })
      }
    >
      {name}
    </Button>
    <Popover
      placement="auto"
      isOpen={popoverOpen}
      target={`Popover-${place_id}`}
      toggle={toggle}
    >
      <PopoverHeader>Popover Title</PopoverHeader>
      <PopoverBody>
        Sed posuere consectetur est at lobortis. Aenean eu leo quam.
        Pellentesque ornare sem lacinia quam venenatis vestibulum.
      </PopoverBody>
    </Popover>
  </div>
));

export default withState("popoverOpen", "toggle", false)(RestaurantInfoBox);
