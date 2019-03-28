import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        pik-it
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/create"
              className={window.location.pathname === "/create" ? "nav-link active" : "nav-link"}
            >
              Create pik-it
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/edit"
              className={window.location.pathname === "/edit" ? "nav-link active" : "nav-link"}
            >
              Edit pik-it
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;