import React from "react";
import User from "../../requests/user";
import SignUpForm from "../users/SignUpForm";
import { getAllFormData } from "../../helper/formHelper.js";
import { delay } from "../../helper/asyncHelper";

const SignUpPage = ({ updateUser }) => {
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
  return (
    <div className="SignUpPage">
      <SignUpForm onSignUpClick={handleSignUp} />
    </div>
  );
};

export default SignUpPage;
