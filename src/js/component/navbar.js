import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="container  mb-3">
      <div className="navbar navbar-light ">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">
            Contact List from Virgilio
          </span>
        </Link>
        <div className="ml-auto">
          <Link to="/addContact">
            <button className="btn btn-primary">Add New Contact</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
