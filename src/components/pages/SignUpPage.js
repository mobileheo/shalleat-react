import React, { Component } from "react";
import User from "../../requests/user";
import SignUpForm from "../users/SignUpForm";
import { SignUpIcon } from "../common/Icons";
import { getAllFormData } from "../../helper/formHelper.js";

const delay = duration => new Promise(res => setTimeout(res, duration));

class SignUpPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      error: {}
    };
  }
  handleSignUp = async e => {
    e.preventDefault();
    try {
      const { currentTarget } = e;
      const userData = getAllFormData(currentTarget);
      await delay(1500);
      const user = await User.signUp(userData);
      this.props.onAuthComplete(user);
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div className="SignUpPage">
        <h1 className="display-4 auth-title">
          Sign up<SignUpIcon />
        </h1>
        <SignUpForm onSignUpClick={this.handleSignUp} />
      </div>
    );
  }
}

export default SignUpPage;
