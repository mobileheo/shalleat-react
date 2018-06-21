import React from "react";
import { NavLink } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from "reactstrap";

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
          {/* <NavbarBrand href="/"> */}
          <NavLink exact to="/" className="navbar-brand">
            <Logo />
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

// import React from "react";
// import { Nav, NavLink, NavItem } from "reactstrap";
// import Logo from "./Logo";
// import { SearchIcon } from "../common/Icons";

// const Navbar = props => {
//   return (
//     <Nav className="navbar navbar-expand-sm navbar-dark bg-dark ">
//       <div className="container">
//         <NavLink exact to="/">
//           Welcome
//         </NavLink>
//         <NavLink exact to="/signin">
//           Sign in
//         </NavLink>
//         <NavItem>
//           <NavLink href="/signin">Sign in</NavLink>
//         </NavItem>
//         <NavItem>
//           <NavLink href="/components/">Components</NavLink>
//         </NavItem>
{
  /* <ul className="navbar-nav">
          <li className="nav-item">
            <a className="navbar-brand" href="#">
              <Logo /> ShallEat
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Sign in
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Profile
            </a>
          </li>
          <form className="form-inline">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-info my-2" type="submit">
              <SearchIcon />
            </button>
          </form>
        </ul> */
}
//       </div>
//     </Nav>
//   );
// };

export default NavBar;
