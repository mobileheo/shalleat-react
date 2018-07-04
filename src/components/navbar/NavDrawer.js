import React from "react";

const NavDrawer = () => {
  return (
    <div
      aria-hidden="true"
      className="navdrawer"
      id="navdrawerDefault"
      tabIndex="-1"
    >
      <div className="navdrawer-content">
        <div className="navdrawer-header">
          <a className="navbar-brand px-0">Navdrawer header</a>
        </div>
        <nav className="navdrawer-nav">
          <a className="nav-item nav-link active">Active</a>
          <a className="nav-item nav-link disabled">Disabled</a>
          <a className="nav-item nav-link">Link</a>
        </nav>
        <div className="navdrawer-divider" />
        <p className="navdrawer-subheader">Navdrawer subheader</p>
        <ul className="navdrawer-nav">
          <li className="nav-item">
            <a className="nav-link active">
              <i className="material-icons mr-3">alarm_on</i> Active with icon
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled">
              <i className="material-icons mr-3">alarm_off</i> Disabled with
              icon
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link">
              <i className="material-icons mr-3">link</i> Link with icon
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavDrawer;
