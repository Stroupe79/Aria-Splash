import React from "react";
import "./style.css";


function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="navbar-brand">
          <ul>
            <li><a href="#">Aria Splash</a></li>
            <li><a href="#">Rates</a></li>
            <li><a href="#">Bookings</a></li>
          </ul>
      </div>
    </nav>
  );
}

export default Nav;