import React from "react";
import { compose, withState, lifecycle } from "recompose";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavBar from "./navbar/NavBar";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import MainPage from "./pages/MainPage";

import User from "../requests/user";

const enhance = compose(
  withState("user", "updateUser", null),
  lifecycle({
    async componentDidMount() {
      const { user, updateUser } = this.props;
      try {
        if (!user) {
          const currentUser = await User.current();
          updateUser(currentUser);
          console.log(currentUser);
        }
      } catch (error) {
        console.log(error);
      }
    }
  })
);

const App = enhance(({ user, updateUser }) => {
  return (
    <Router>
      <div className="App">
        <NavBar user={user} updateUser={updateUser} />
        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <MainPage {...props} user={user} updateUser={updateUser} />
            )}
          />
          <Route
            exact
            path="/signin"
            render={props => (
              <SignInPage {...props} user={user} updateUser={updateUser} />
            )}
          />
          <Route
            exact
            path="/signup"
            render={props => (
              <SignUpPage {...props} user={user} updateUser={updateUser} />
            )}
          />
        </Switch>
      </div>
    </Router>
  );
});

export default App;
