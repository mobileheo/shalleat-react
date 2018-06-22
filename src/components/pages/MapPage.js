import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import { googleMapAPI } from "../../requests/configuration";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class MapPage extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   defualtCenter: this.props.center,
    //   center: this.state.center
    // };
  }

  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  render() {
    return (
      <div className="MapPage" style={{ height: "50vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: googleMapAPI }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text={"Kreyser Avrora"}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default MapPage;
