import React, { Component } from "react";
import Restaurant from "../../requests/restaurant";

const { Consumer, Provider } = React.createContext({});

export class RestProvider extends Component {
  state = {
    details: null,
    setDetails: details => this.setState({ details })
  };

  render() {
    const { children } = this.props;
    return <Provider value={this.state}>{children}</Provider>;
  }
}

export const RestConsumer = Consumer;
