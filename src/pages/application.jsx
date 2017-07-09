import React from "react";
import Navbar from "../components/navbar";

export default class Application extends React.Component {

  render() {
    return (
      <div>
        <Navbar />
        <div className="app-body container">
          {this.props.children}
        </div>
      </div>
    );
  }

}
