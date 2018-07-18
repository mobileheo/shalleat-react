import React, { Component } from "react";
import Loader from "react-loader-spinner";
import { Animated } from "react-animated-css";

const HEIGHT = 100;
const WIDTH = HEIGHT;

class CurrentMarker extends Component {
  constructor(props) {
    super(props);
    this.markerRef = React.createRef();
  }

  componentDidMount() {}

  render() {
    return (
      <Animated
        animationIn="zoomIn"
        animationOut="bounceOut"
        animateOnMount={true}
        isVisible={true}
      >
        <div
          className="d-flex justify-content-center align-items-center"
          style={{
            transform: "translate(-50%, -50%)"
          }}
          ref={this.markerRef}
          onClick={e => {
            console.log(this.markerRef);
          }}
        >
          <Loader type="Rings" color="#2196f3" height={HEIGHT} width={WIDTH} />
        </div>
      </Animated>
    );
  }
}

export default CurrentMarker;
