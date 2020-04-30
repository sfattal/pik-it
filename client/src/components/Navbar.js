import React from 'react';
import "./navbar.css"
import { Link } from 'react-router-dom';
import Logo from '../logoNav.png'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
                    <span> <img id="navBarLogo" alt="logo" src={Logo}/> </span>

      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/create"
              className={window.location.pathname === "/create" ? "nav-link active" : "nav-link"}
            >
            Create
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/FAQ"
              className={window.location.pathname === "/FAQ" ? "nav-link active" : "nav-link"}
            >
            FAQ
            </Link>
          </li>
          {/* <li className="nav-item">
            <Link
              to="/edit"
              className={window.location.pathname === "/edit" ? "nav-link active" : "nav-link"}
            >
              Edit
            </Link>
          </li> */}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;