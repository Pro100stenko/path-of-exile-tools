import React from "react";
import PropTypes from "prop-types";

export default class Hero extends React.Component {

  render() {
    const { title, description } = this.props;
    const descriptionElem = description ? <h4 className="subtitle is-5">{description}</h4> : null;
    return (
      <div>
        <section className="hero is-primary">
          <div className="container">
            <div className="hero-body">
              <h1 className="title is-3">{title}</h1>
              {descriptionElem}
            </div>
          </div>
        </section>
      </div>
    );
  }

}

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
};
