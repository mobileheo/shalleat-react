import React from "react";
import { Redirect } from "react-router-dom";
import { withState } from "recompose";
import { isMobile } from "react-device-detect";
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
  const handleGuestMode = e => {
    e.preventDefault();
    const guest = { firstName: "Guest" };
    updateUser(guest);
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
      <SignInForm
        onSignInClick={handleSignIn}
        onGuestModeClick={handleGuestMode}
      />
    </div>
  );
});

export default SignInPage;
