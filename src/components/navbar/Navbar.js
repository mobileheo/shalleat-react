import React, { Fragment } from "react";
import { withState } from "recompose";
import anime from "animejs";
import { Animated } from "react-animated-css";
import { NavLink } from "react-router-dom";
import { Nav, NavItem } from "reactstrap";
import Logo from "./Logo";
import User from "../../requests/user";
const enhance = withState("hovered", "toggleHover", false);
const NavBar = enhance(({ user, updateUser, hovered, toggleHover }) => {
  const signOut = async e => {
    e.preventDefault();
    await User.signOut();
    updateUser(null);
  };

  return (
    <Animated
      animationIn="fadeInLeft"
      // animationOut="bounce"
      isVisible={true}
    >
      <div className="NavBar">
        <header className="navbar navbar-dark navbar-full bg-dark doc-navbar-default">
          <button
            aria-controls="navdrawerDefault"
            aria-expanded="false"
            aria-label="Toggle Navdrawer"
            className="navbar-toggler border border-white-hint"
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
                  className="nav-link px-2 bg-transparent border border-white"
                  onClick={signOut}
                >
                  Sign out
                </NavLink>
              </NavItem>
            ) : (
              <Fragment>
                <Animated
                  animationIn="fadeInLeft"
                  // animationOut="bounce"
                  isVisible={true}
                >
                  <NavItem>
                    <NavLink
                      exact
                      to="/signin"
                      className="nav-link px-2 bg-transparent"
                      onMouseOver={e => {
                        const { currentTarget } = e;

                        toggleHover({ hovered: true });
                        // currentTarget.classList.add("border", "border-white");
                        // const slowAnimation = anime({
                        //   targets: currentTarget,
                        //   scale: 1.3,
                        //   // border: "solid",
                        //   backgroundColor: "#fab10e !important",
                        //   duration: 1000,
                        //   easing: "linear"
                        // });
                      }}
                      onMouseLeave={e => {
                        toggleHover({ hovered: false });
                        //   const { currentTarget } = e;
                        //   currentTarget.classList.remove("border", "border-white");
                        //   const slowAnimation = anime({
                        //     targets: currentTarget,
                        //     scale: 1,
                        //     borderRadius: 50,
                        //     duration: 4000,
                        //     elasticity: 500
                        //   });
                      }}
                    >
                      Sign in
                    </NavLink>
                  </NavItem>
                </Animated>
                <NavItem>
                  <NavLink exact to="/" className="nav-link disabled px-2">
                    or
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    exact
                    to="/signup"
                    className="nav-link px-2 bg-transparent border border-white"
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
                  <i className="material-icons mr-3">alarm_on</i> Active with
                  icon
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
    </Animated>
  );
});

export default NavBar;
