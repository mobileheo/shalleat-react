import React from "react";
import { Button } from "../common/Buttons";

const SignInForm = ({ onSignInClick }) => (
  <div className="SignUpForm mt-4">
    <h1 className="display-4 auth-title">Sign In</h1>
    <form onSubmit={onSignInClick}>
      <div className="form-group">
        <div className="floating-label">
          <label htmlFor="email">Email address</label>
          <input
            name="email"
            aria-describedby="emailHelp"
            className="form-control"
            id="email"
            placeholder="sunny@shalleat.com"
            type="text"
            autoComplete="username email"
          />
        </div>
      </div>
      <div className="form-group">
        <div className="floating-label">
          <label htmlFor="password">Password</label>
          <input
            name="password"
            aria-describedby="passwordHelp"
            className="form-control"
            id="password"
            type="password"
            autoComplete="current-password"
          />
        </div>
      </div>
      <Button class="btn btn-primary" name="signin" type="submit" />
    </form>
  </div>
);

export default SignInForm;
