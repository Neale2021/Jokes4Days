import React from "react";
import { Navbar } from "react-bootstrap";
import {NavLink} from "react-router-dom";

function Nav(props) {
    return (
      <div>
        <Navbar expand="lg" bg="light" sticky="top">
          <NavLink className="nav-link" to="/home">
        </NavLink>
        <ul className="navbar-nav ml-auto navitem-indent">
          <li className="nav-item">
            <NavLink to="/Dad">
              <div className="nav-font text-light">Dad jokes</div>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/Geek">
              <div className="nav-font text-light">Geek jokes</div>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/Random">
              <div className="nav-font text-light">Random jokes</div>
            </NavLink>
          </li>
        </ul>
      </Navbar>
    </div>
  );
}


export default Nav;
