import React from 'react';
import "./navbar.css"
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
                    <span> <img id="navBarLogo" alt="logo" src="https://scontent-lga3-1.xx.fbcdn.net/v/t1.15752-9/55704659_392603638134129_887138109307748352_n.png?_nc_cat=100&_nc_ht=scontent-lga3-1.xx&oh=d6f3bbb45e085891bb34877bd09d7de2&oe=5D4CE6EB"/> </span>

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