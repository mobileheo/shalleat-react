import React from "react";
import { Button } from "../common/Buttons";

const SignInForm = ({ onSignInClick }) => (
  <div
    className="SignInForm shadow-sm bg-white rounded"
    style={{
      width: "450px",
      height: "auto",
      minHeight: "500px",
      padding: "48px 40px 36px"
    }}
  >
    <h1 className="display-4 auth-title">Sign in</h1>
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
      <div className="d-flex justify-content-end align-items-center">
        <a
          className="text-info disabled"
          href="#"
          for="findEmail"
          style={{
            cursor: "not-allowed",
            opacity: "0.5",
            textDecoration: "none"
          }}
        >
          Forgot email?
        </a>
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
      <div className="d-flex justify-content-end align-items-center">
        <a
          className="text-info disabled"
          href="#"
          for="findPassword"
          style={{
            cursor: "not-allowed",
            opacity: "0.5",
            textDecoration: "none"
          }}
        >
          Forgot password?
        </a>
      </div>
      <div
        className="d-flex justify-content-end align-items-center"
        style={{ marginTop: "2.25rem" }}
      >
        <Button
          class="btn btn-secondary text-capitalize"
          name="sign in"
          type="submit"
        />
      </div>
      <div className="d-flex" style={{ marginTop: "2.25rem" }}>
        <a className="text-info" href="#" for="findEmail">
          Don't wanna sign in? Use Guest mode.
        </a>
      </div>
    </form>
  </div>
);

export default SignInForm;
