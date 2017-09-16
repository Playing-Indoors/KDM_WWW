import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

// default = unfilled
// defaultEvent = unfilled with event
// active = filled
// activeEvent = filled with event

// milestone.push(<span key={i} className={`milestone milestone--active ${filled}`} />);

const MilestoneDot = ({ type, mini }) => {
  const myClass = classNames({
    milestoneDot: true,
    "milestoneDot--mini": mini,
    "milestoneDot--active": type === "active" || type === "activeEvent",
    "milestoneDot--event": type === "defaultEvent" || type === "activeEvent"
  });
  return <span className={myClass} />;
};

MilestoneDot.defaultProps = {
  type: "default",
  mini: false
};

MilestoneDot.propTypes = {
  type: PropTypes.string,
  mini: PropTypes.bool
};

export default MilestoneDot;
