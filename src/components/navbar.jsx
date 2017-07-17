import React from "react";
import { Link } from "react-router-dom";

export default class Navbar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      menuActive: false,
    };
    this.toggleMenuActive = this.toggleMenuActive.bind(this);
  }

  toggleMenuActive() {
    this.setState({
      menuActive: !this.state.menuActive,
    });
  }

  render() {
    const { menuActive } = this.state;
    return (
      <div className="container">
        <nav className="navbar">

          <div className="navbar-brand">
            <a href="#/" className="navbar-item page-title is-primary">
              PoE Tools
            </a>
            <div className="navbar-burger" onClick={this.toggleMenuActive}>
              <span />
              <span />
              <span />
            </div>
          </div>

          <div className={`navbar-menu ${menuActive ? "is-active" : null}`}>
            <div className="navbar-start">
              <Link className="navbar-item" to="/dps">DPS Calculator</Link>
            </div>
          </div>

        </nav>
      </div>
    );
  }

}
