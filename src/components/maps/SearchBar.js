import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class SearchBox extends Component {
  render() {
    return <input {...this.props} type="text" />;
  }
}
