import React from "react";
import { Button } from "../common/Buttons";

const SignUpForm = ({ onSignUpClick }) => (
  <div className="SignUpForm mt-4">
    <h1 className="display-4 auth-title">Sign Up</h1>
    <form onSubmit={onSignUpClick}>
      <div className="form-group">
        <div className="form-row">
          <div className="col">
            <div className="floating-label">
              <label htmlFor="firstName">Frist Name</label>
              <input
                name="firstName"
                type="text"
                className="form-control"
                placeholder="First name"
                autoComplete="given-name"
              />
            </div>
          </div>

          <div className="col">
            <div className="floating-label">
              <label htmlFor="lastName">Last Name</label>
              <input
                name="lastName"
                type="text"
                className="form-control"
                placeholder="Last name"
                autoComplete="family-name"
              />
            </div>
          </div>
        </div>
      </div>
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
            autoComplete="email"
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
            autoComplete="new-password"
          />
          <small id="passwordHelpBlock" className="form-text text-muted">
            Your password must be 8-20 characters long, contain letters and
            numbers, and must not contain spaces, special characters, or emoji.
          </small>
        </div>
      </div>
      <div className="form-group">
        <div className="floating-label">
          <label htmlFor="pwMatch">Password Confirmation</label>
          <input
            name="pwMatch"
            aria-describedby="pwMatchHelp"
            className="form-control"
            id="pwMatch"
            type="password"
            autoComplete="new-password"
          />
        </div>
      </div>
      <Button
        class="btn btn-primary text-capitalize"
        name="sign up"
        type="submit"
      />
    </form>
  </div>
);

export default SignUpForm;
