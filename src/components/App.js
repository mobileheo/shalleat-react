import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./navbar/Navbar";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import MapPage from "./pages/MapPage";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null
    };
  }

  getUser = currentUser => {
    console.log(currentUser);
    this.setState({ currentUser });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Switch>
              <Route
                exact
                path="/"
                render={props => (
                  <MapPage {...props} onAuthComplete={this.getUser} />
                )}
              />
              <Route
                exact
                path="/signin"
                render={props => (
                  <SignInPage {...props} onAuthComplete={this.getUser} />
                )}
              />
              <Route
                exact
                path="/signup"
                render={props => (
                  <SignUpPage {...props} onAuthComplete={this.getUser} />
                )}
              />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
