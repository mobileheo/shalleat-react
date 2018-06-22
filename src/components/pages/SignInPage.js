import React, { Component } from "react";
import User from "../../requests/users";
import SignInForm from "../users/SignInForm";
import { getAllFormData } from "../../helper/formHelper.js";

const delay = duration => new Promise(res => setTimeout(res, duration));

class SignInPage extends Component {
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
      await delay(1500);
      const user = await User.signIn(userData);
      this.props.onAuthComplete(user);
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return <SignInForm onSignInClick={this.handleSignIn} />;
  }
}

export default SignInPage;
