import React from "react";
import { Redirect } from "react-router-dom";
import { withState } from "recompose";
import User from "../../requests/user";
import SignUpForm from "../users/SignUpForm";
import { getAllFormData } from "../../helper/formHelper.js";
import { delay } from "../../helper/asyncHelper";

const enhance = withState("redirect", "updateRedirect", false);
const SignUpPage = enhance(({ user, updateUser }) => {
  const handleSignUp = async e => {
    e.preventDefault();
    try {
      const { currentTarget } = e;
      const userData = getAllFormData(currentTarget);
      await delay(1500);
      const user = await User.signUp(userData);
      updateUser(user);
    } catch (error) {
      console.log(error);
    }
  };
  return user ? (
    <Redirect to="/" />
  ) : (
    <div className="SignUpPage w-50 mt-4 m-auto">
      <SignUpForm onSignUpClick={handleSignUp} />
    </div>
  );
});

export default SignUpPage;
