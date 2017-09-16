import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

// default = unfilled
// defaultEvent = unfilled with event
// active = filled
// activeEvent = filled with event

// milestone.push(<span key={i} className={`milestone milestone--active ${filled}`} />);

const Milestone = ({ type }) => {
  const myClass = classNames({
    milestone: true,
    "milestone--active": type === "active" || type === "activeEvent",
    "milestone--event": type === "defaultEvent" || type === "activeEvent"
  });
  return <span className={myClass} />;
};

Milestone.defaultProps = {
  type: "default"
};

Milestone.propTypes = {
  type: PropTypes.string
};

export default Milestone;
