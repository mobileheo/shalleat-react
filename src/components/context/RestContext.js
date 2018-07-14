import React, { Component } from "react";
import Restaurant from "../../requests/restaurant";

const { Consumer, Provider } = React.createContext({});

export class RestProvider extends Component {
  state = {
    photoUrls: null,
    storePhotoUrls: photoUrls => {
      this.setState({ photoUrls });
    }
  };

  render() {
    const { children } = this.props;
    return <Provider value={this.state}>{children}</Provider>;
  }
}

export const RestConsumer = Consumer;
