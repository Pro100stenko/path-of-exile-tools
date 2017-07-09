import React from "react";
import PropTypes from "prop-types";
import Navbar from "../components/navbar";

export default class Application extends React.Component {

  render() {
    return (
      <div>
        <Navbar />
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }

}

Application.propTypes = {
  children: PropTypes.node,
};
