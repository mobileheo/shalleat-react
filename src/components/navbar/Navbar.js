import React from "react";
import { NavLink } from "react-router-dom";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from "reactstrap";

import Logo from "./Logo";

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div className="NavBar">
        <Navbar color="dark" dark expand="sm">
          <NavLink exact to="/" className="navbar-brand mr-0">
            <Logo />
          </NavLink>
          <NavLink exact to="/" className="navbar-brand mx-0">
            ShallEat
          </NavLink>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink exact to="/signin" className="nav-link">
                  Sign in
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink exact to="/signup" className="nav-link">
                  Sign up
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
