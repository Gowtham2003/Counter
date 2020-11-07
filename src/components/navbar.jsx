import React, { Component } from "react";

export class Navbar extends Component {
  render() {
    return (
      <div>
        <div>
          <div>
            <nav className="navbar navbar-light bg-light">
              <a className="navbar-brand" href="#">
                Navbar
                <span className="badge badge-pill badge-secondary">
                  {this.props.totalCounters}
                </span>
              </a>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
