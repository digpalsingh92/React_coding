import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar container ">
        <div className="logo">
          <img src="/brand_logo.png" alt="Brand Logo" />
        </div>
        <ul>
          <li className="list">Home</li>
          <li className="list">About</li>
          <li className="list">Location</li>
          <li className="list">Contact</li>
        </ul>
        <button type="button">LOGIN</button>
      </nav>
    </div>
  );
};

export default Navbar;
