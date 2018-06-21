import React, { Component } from "react";
import AuthPage from "./pages/AuthPage";
import Navbar from "./navbar/Navbar";

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
      <React.Fragment>
        <Navbar />
        <div className="container mt-4">
          <AuthPage onAuthComplete={this.getToken} />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
