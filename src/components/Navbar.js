import React, { Component } from "react";

export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper light blue">
            <div className="container">
              <a href="#" className="brand-logo">
                Survivor
              </a>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li>
                  <a href="sass.html">Mi Nuh Dunce</a>
                </li>
                <li>
                  <a href="badges.html">A it Mek</a>
                </li>
                <li>
                  <a href="collapsible.html">Mi Soon Reach</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
