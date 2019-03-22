import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
//Simple nav bar taken from boot strap but some logic is added to it
// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Choosey
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/create"
              className={window.location.pathname === "/create" ? "nav-link active" : "nav-link"}
            >
              Create Choosey
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/edit"
              className={window.location.pathname === "/edit" ? "nav-link active" : "nav-link"}
            >
              Edit Choosey
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;