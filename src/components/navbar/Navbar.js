import React from "react";
import { withState } from "recompose";
import { NavLink } from "react-router-dom";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from "reactstrap";

import Logo from "./Logo";

const enhance = withState("isOpen", "toggle", false);
const NavBar = () => {
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
          <NavLink exact to="/" className="navbar-brand mx-0">
            <Logo />
            ShallEat
          </NavLink>
        </span>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink exact to="/signin" className="nav-link">
              Sign in
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink exact to="/" className="nav-link disabled px-0">
              or
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink exact to="/signup" className="nav-link">
              Sign up
            </NavLink>
          </NavItem>
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
};
// class NavBar extends React.Component {
//   constructor(props) {
//     super(props);

//     this.toggle = this.toggle.bind(this);
//     this.state = {
//       isOpen: false
//     };
//   }
//   toggle() {
//     this.setState({
//       isOpen: !this.state.isOpen
//     });
//   }
//   render() {
//     return (
//       <div className="NavBar">
//         <Navbar color="dark" dark expand="sm">
//           <NavLink exact to="/" className="navbar-brand mr-0">
//             <Logo />
//           </NavLink>
//           <NavLink exact to="/" className="navbar-brand mx-0">
//             ShallEat
//           </NavLink>
//           <NavbarToggler onClick={this.toggle} />
//           <Collapse isOpen={this.state.isOpen} navbar>
//             <Nav className="ml-auto" navbar>
//               <NavItem>
//                 <NavLink exact to="/signin" className="nav-link">
//                   Sign in
//                 </NavLink>
//               </NavItem>
//               <NavItem>
//                 <NavLink exact to="/signup" className="nav-link">
//                   Sign up
//                 </NavLink>
//               </NavItem>
//             </Nav>
//           </Collapse>
//         </Navbar>
//       </div>
//     );
//   }
// }

export default NavBar;
