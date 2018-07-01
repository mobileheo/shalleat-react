import React, { Fragment } from "react";
import { withState } from "recompose";
import anime from "animejs";
import { Animated } from "react-animated-css";
import { NavLink } from "react-router-dom";
import { Nav, NavItem } from "reactstrap";
import Logo from "./Logo";
import NavDrawer from "./NavDrawer";
import User from "../../requests/user";

const enhance = withState("hovered", "toggleHover", false);
const NavBar = enhance(({ user, updateUser, hovered, toggleHover }) => {
  const signOut = async e => {
    e.preventDefault();
    await User.signOut();
    updateUser(null);
  };

  const style = withUser =>
    withUser
      ? user
        ? { display: "none" }
        : { display: "list-item" }
      : !user
        ? { display: "none" }
        : { display: "list-item" };

  return (
    <div className="NavBar">
      <header className="navbar navbar-dark navbar-full bg-dark doc-navbar-default">
        <span className="navbar-brand mr-auto">
          <NavLink exact to="/" className="navbar-brand mx-0 bg-transparent">
            <Animated animationIn="rotateIn" isVisible={true}>
              <Logo />
            </Animated>
            <Animated animationIn="tada" isVisible={true}>
              <span className="ShallEatTitle ml-2">ShallEat</span>
            </Animated>
          </NavLink>
        </span>
        {/* className={
                  chosenId === placeId && isOpen
                    ? "list-group-item list-group-item-action bg-secondary text-white mb-2"
                    : "list-group-item list-group-item-action mb-2"
                } */}
        <Nav className="ml-auto" navbar>
          <Animated
            animationIn="fadeInLeft"
            animationOut="fadeOutRight"
            isVisible={!!user}
          >
            <NavItem style={style(false)}>
              <NavLink
                exact
                to="/signin"
                className="nav-link bg-transparent border border-white mx-3 px-2"
                onClick={signOut}
              >
                Sign out
              </NavLink>
            </NavItem>
          </Animated>
          <Animated
            animationIn="fadeInLeft"
            animationOut="fadeOutRight"
            isVisible={!user}
          >
            <NavItem
              style={user ? { display: "none" } : { display: "list-item" }}
            >
              <NavLink
                exact
                to="/signin"
                className="nav-link px-2 bg-transparent border border-white "
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
          <Animated
            animationIn="fadeInUp"
            animationOut="fadeOutDown"
            animationInDelay={500}
            isVisible={!user}
          >
            <NavItem
              style={user ? { display: "none" } : { display: "list-item" }}
            >
              <NavLink exact to="/" className="nav-link disabled px-2">
                or
              </NavLink>
            </NavItem>
          </Animated>
          <Animated
            animationIn="fadeInRight"
            animationOut="fadeOutLeft"
            animationInDelay={1000}
            isVisible={!user}
          >
            <NavItem
              style={user ? { display: "none" } : { display: "list-item" }}
            >
              <NavLink
                exact
                to="/signup"
                className="nav-link px-2 bg-transparent border border-white"
              >
                Sign up
              </NavLink>
            </NavItem>
          </Animated>
          <Animated
            animationIn="bounceIn"
            animationOut="bounceOut"
            animationInDelay={500}
            isVisible={!!user}
          >
            <button
              aria-controls="navdrawerDefault"
              aria-expanded="false"
              aria-label="Toggle Navdrawer"
              className="navbar-toggler border border-white-hint ml-3"
              data-target="#navdrawerDefault"
              data-toggle="navdrawer"
              style={style(false)}
            >
              <span className="navbar-toggler-icon" />
            </button>
          </Animated>
        </Nav>
      </header>
      {user ? <NavDrawer /> : null}
    </div>
  );
});

export default NavBar;
