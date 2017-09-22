import React, { Component } from "react";
import PropTypes from "prop-types";

class AyaColor extends Component {
  render() {
    return (
      <div className={`ayaColor ayaColor--${this.props.name}`}>
        <span className="ayaColor-color" />
        <span className="ayaColor-name" />
      </div>
    );
  }
}

AyaColor.propTypes = {
  name: PropTypes.string
};

export default AyaColor;
