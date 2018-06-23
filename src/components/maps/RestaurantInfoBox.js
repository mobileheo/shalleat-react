import React, { Component } from "react";
import { withState } from "recompose";
import { Button, Popover, PopoverHeader, PopoverBody } from "reactstrap";

const enhance = withState("popoverOpen", "toggle", false);
const RestaurantInfoBox = enhance(({ id, popoverOpen, toggle }) => (
  <div>
    {console.log(id)}
    <Button
      id={`Popover-${id}`}
      onClick={() => toggle(popoverOpen => !popoverOpen)}
    >
      toggle
    </Button>
    <Popover
      placement="auto"
      isOpen={popoverOpen}
      target={`Popover-${id}`}
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
