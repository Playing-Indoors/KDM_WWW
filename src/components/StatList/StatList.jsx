import React, { Component } from "react";
import PropTypes from "prop-types";

class StatList extends Component {
  render() {
    return <div className="statList">{this.props.name}</div>;
  }
}

StatList.defaultProps = {
  name: "~"
};

StatList.propTypes = {
  name: PropTypes.string
};

export default StatList;
