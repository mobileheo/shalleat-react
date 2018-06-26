import React, { Component } from "react";
import { withState } from "recompose";
import { Redirect } from "react-router-dom";
import User from "../../requests/user";
import SignInForm from "../users/SignInForm";
import { getAllFormData } from "../../helper/formHelper.js";
import { delay } from "../../helper/asyncHelper";

const enhance = withState("redirect", "updateRedirect", false);
const SignInPage = enhance(({ updateUser, redirect, updateRedirect }) => {
  const handleSignIn = async e => {
    e.preventDefault();
    try {
      const { currentTarget } = e;
      const userData = getAllFormData(currentTarget);
      await delay(1500);
      const user = await User.signIn(userData);
      updateUser(user);
      updateRedirect(!redirect);
    } catch (error) {
      console.log(error);
    }
  };
  return redirect ? (
    <Redirect to="/" />
  ) : (
    <div className="SignInPage">
      <SignInForm onSignInClick={handleSignIn} />
    </div>
  );
});

export default SignInPage;
