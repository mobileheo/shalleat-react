import React, { Component } from "react";
import { MapConsumer } from "./components/context/MapContext";

class Test extends Component {
  render() {
    return (
      <div>
        <MapConsumer>
          {/* {context => <button onClick={context.inc}>{context.number}</button>} */}
          {context => (
            <button onClick={() => context.setPlaceId(100)}>
              {context.placeId}
            </button>
          )}
        </MapConsumer>
      </div>
    );
  }
}

export default Test;
