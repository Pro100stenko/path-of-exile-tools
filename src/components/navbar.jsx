import React from "react";

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
      menuActive: !this.state.menuActive
    });
  }

  render() {
    const { menuActive } = this.state;
    return (
      <div className="container">
        <nav className="navbar">

          <div className="navbar-brand">
            <a href="/" className="navbar-item page-title is-primary">
              PoE Tools
            </a>
            <div className="navbar-burger" onClick={this.toggleMenuActive}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div className={`navbar-menu ${menuActive ? "is-active" : null}`}>
            <div className="navbar-start">
              <a className="navbar-item" href="/">
                Nav Item
              </a>
            </div>
          </div>

        </nav>
      </div>
    );
  }

}
