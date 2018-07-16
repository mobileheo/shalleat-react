import React from "react";
import { Redirect } from "react-router-dom";
import { withState } from "recompose";
import { isMobile } from "react-device-detect";
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
    <div
      className="SignInPage d-flex flex-column justify-content-center align-items-center w-100"
      style={
        isMobile
          ? {}
          : {
              height: "94vh"
            }
      }
    >
      <SignUpForm onSignUpClick={handleSignUp} />
    </div>
  );
});

export default SignUpPage;
