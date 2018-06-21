import React from "react";
import { Button } from "../common/Buttons";

const SignInForm = props => {
  const { onSignInClick } = props;

  return (
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
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
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
          />
        </div>
      </div>
      <Button class="btn btn-primary" name="signin" type="submit" />
    </form>
  );
};

export default SignInForm;
