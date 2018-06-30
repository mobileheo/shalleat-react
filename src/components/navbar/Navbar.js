import React, { Fragment } from "react";
import { withState } from "recompose";
import { NavLink } from "react-router-dom";
import { Nav, NavItem } from "reactstrap";
import Logo from "./Logo";
import User from "../../requests/user";

const enhance = withState("isHover", "toggleHover", false);
const NavBar = enhance(({ user, updateUser, isHover, toggleHover }) => {
  const signOut = async e => {
    e.preventDefault();
    await User.signOut();
    updateUser(null);
  };

  return (
    <div className="NavBar">
      <header className="navbar navbar-dark navbar-full bg-dark doc-navbar-default">
        <button
          aria-controls="navdrawerDefault"
          aria-expanded="false"
          aria-label="Toggle Navdrawer"
          className="navbar-toggler"
          data-target="#navdrawerDefault"
          data-toggle="navdrawer"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <span className="navbar-brand mr-auto">
          <NavLink exact to="/" className="navbar-brand mx-0 bg-transparent">
            <Logo />
            ShallEat
          </NavLink>
        </span>
        {/* className={
                  chosenId === placeId && isOpen
                    ? "list-group-item list-group-item-action bg-secondary text-white mb-2"
                    : "list-group-item list-group-item-action mb-2"
                } */}
        <Nav className="ml-auto" navbar>
          {user ? (
            <NavItem>
              <NavLink
                exact
                to="/signin"
                className="nav-link px-2 bg-transparent"
                onClick={signOut}
              >
                Sign out
              </NavLink>
            </NavItem>
          ) : (
            <Fragment>
              <NavItem>
                <NavLink
                  exact
                  to="/signin"
                  className="nav-link px-2 bg-transparent"
                >
                  Sign in
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink exact to="/" className="nav-link disabled px-2">
                  or
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  exact
                  to="/signup"
                  className="nav-link px-2 bg-transparent"
                >
                  Sign up
                </NavLink>
              </NavItem>
            </Fragment>
          )}
        </Nav>
      </header>
      <div
        aria-hidden="true"
        className="navdrawer"
        id="navdrawerDefault"
        tabIndex="-1"
      >
        <div className="navdrawer-content">
          <div className="navdrawer-header">
            <a className="navbar-brand px-0" href="#">
              Navdrawer header
            </a>
          </div>
          <nav className="navdrawer-nav">
            <a className="nav-item nav-link active" href="#">
              Active
            </a>
            <a className="nav-item nav-link disabled" href="#">
              Disabled
            </a>
            <a className="nav-item nav-link" href="#">
              Link
            </a>
          </nav>
          <div className="navdrawer-divider" />
          <p className="navdrawer-subheader">Navdrawer subheader</p>
          <ul className="navdrawer-nav">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                <i className="material-icons mr-3">alarm_on</i> Active with icon
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">
                <i className="material-icons mr-3">alarm_off</i> Disabled with
                icon
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="material-icons mr-3">link</i> Link with icon
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
});

export default NavBar;
