import React, { Component } from "react";
import User from "../../requests/users";
import SignInForm from "../users/SignInForm";
import SignUpForm from "../users/SignUpForm";
import { getAllFormData } from "../../helper/formHelper.js";

class AuthPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      error: {}
    };
  }

  handleSignIn = async e => {
    e.preventDefault();
    try {
      const { currentTarget } = e;
      const userData = getAllFormData(currentTarget);
      const user = await User.signIn(userData);
    } catch (error) {
      console.log(error);
    }
  };

  handleSignUp = async e => {
    e.preventDefault();

    try {
      const { currentTarget } = e;
      const userData = getAllFormData(currentTarget);
      console.log(userData);
      const user = await User.signUp(userData);
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    // return <SignInForm onSignInClick={this.handleSignIp} />;
    return <SignUpForm onSignUpClick={this.handleSignUp} />;
  }
}

export default AuthPage;
