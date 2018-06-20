import React, { Component } from "react";
import { Button } from "../common/Buttons";

class SignInForm extends Component {
  handleChange = e => {
    e.preventDefault();
    const { currentTarget } = e;
    const formData = new FormData(currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");
    const user = { email, password };
  };
  render() {
    return (
      <form onClick={this.handleChange}>
        <div className="form-group">
          <div className="floating-label">
            <label htmlFor="email">Email</label>
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
  }
}

export default SignInForm;
