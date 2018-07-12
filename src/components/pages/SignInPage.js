import React from "react";
import { Redirect } from "react-router-dom";
import { withState } from "recompose";
import User from "../../requests/user";
import SignInForm from "../users/SignInForm";
import { getAllFormData } from "../../helper/formHelper.js";
import { delay } from "../../helper/asyncHelper";

const enhance = withState("redirect", "updateRedirect", false);
const SignInPage = enhance(({ user, updateUser }) => {
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
  return user ? (
    <Redirect to="/" />
  ) : (
    <div className="SignInPage w-25 m-auto">
      <SignInForm onSignInClick={handleSignIn} />
    </div>
  );
});

export default SignInPage;
