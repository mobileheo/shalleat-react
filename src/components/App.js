import React, { Component } from "react";
import AuthPage from "./pages/AuthPage";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: null
    };
  }

  getToken = token => {
    console.log(token);
    this.setState({ token });
  };

  render() {
    return (
      <div className="container mt-4">
        <AuthPage onAuthComplete={this.getToken} />
      </div>
    );
  }
}

export default App;
