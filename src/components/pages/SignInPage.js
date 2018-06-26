import React, { Component } from "react";
import User from "../../requests/user";
import SignInForm from "../users/SignInForm";
import { getAllFormData } from "../../helper/formHelper.js";
import { delay } from "../../helper/asyncHelper";

const SignInPage = ({ updateUser }) => {
  const handleSignIn = async e => {
    e.preventDefault();
    try {
      const { currentTarget } = e;
      const userData = getAllFormData(currentTarget);
      await delay(1500);
      const user = await User.signIn(userData);
      updateUser(user);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="SignUpPage">
      <SignInForm onSignInClick={handleSignIn} />
    </div>
  );
};

export default SignInPage;
