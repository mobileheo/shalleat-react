import React, { Component } from "react";
import { Button } from "../common/Buttons";
import User from "../../requests/users";

const getAllFormData = currentTarget => {
  const formData = new FormData(currentTarget);
  let formFields = Array.from(formData.keys());
  let inputObj = {};
  formFields.forEach(f => {
    const field = formData.get(f);
    inputObj[f] = field;
  });
  return inputObj;
};

class SignInForm extends Component {
  handleChange = async e => {
    e.preventDefault();
    const { currentTarget } = e;
    const userData = getAllFormData(currentTarget);
    const user = await User.signIn(userData);

    // console.log(getForms(formData));
  };
  render() {
    return (
      <form onSubmit={this.handleChange} autoComplete="off">
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
  }
}

export default SignInForm;
