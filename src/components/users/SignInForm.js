import React from "react";
import { isMobile } from "react-device-detect";
import { Button } from "../common/Buttons";

const SignInForm = ({ onSignInClick, onGuestModeClick }) => (
  <div
    className="SignInForm shadow-sm bg-white rounded"
    style={
      isMobile
        ? {
            // height: "auto",
            // width: "95vw",
            // minHeight: "390px",
            padding: "48px 40px"
          }
        : {
            width: "450px",
            height: "auto",
            minHeight: "390px",
            padding: "48px 40px"
          }
    }
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
          htmlFor="findEmail"
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
          htmlFor="findPassword"
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
        className="d-flex justify-content-between align-items-center flex-wrap"
        style={{ marginTop: "2rem" }}
      >
        <Button
          class="btn btn-secondary text-capitalize"
          name="sign in"
          type="submit"
        />
        <a
          href=""
          className="text-info"
          htmlFor="triggerGuestMode"
          onClick={onGuestModeClick}
          style={isMobile ? { marginTop: "1rem" } : {}}
        >
          Don't wanna sign in? Use Guest mode.
        </a>
      </div>
    </form>
  </div>
);

export default SignInForm;
