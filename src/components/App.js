import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
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
      <Router>
        <div className="App">
          <Navbar />
          <div className="container mt-4">
            <Switch>
              <Route exact path="/signin" component={SignInPage} />
              <Route exact path="/signup" component={SignUpPage} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
