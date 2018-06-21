import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import { SearchIcon } from "../common/Icons";

const Navbar = props => {
  return (
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark ">
      <div className="container">
        <ul class="navbar-nav">
          <li class="nav-item">
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
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
