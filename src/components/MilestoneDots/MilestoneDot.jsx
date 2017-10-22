import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

// default = unfilled
// defaultEvent = unfilled with event
// active = filled
// activeEvent = filled with event

// milestone.push(<span key={i} className={`milestone milestone--active ${filled}`} />);

const MilestoneDot = ({ type, mini, handle }) => {
  const myClass = classNames(
    {
      milestoneDot: true,
      "milestoneDot--mini": mini,
      "milestoneDot--active": type === "active" || type === "activeEvent",
      "milestoneDot--event": type === "defaultEvent" || type === "activeEvent"
    },
    handle.length > 0 ? `milestoneDot--h_${handle}` : ""
  );
  return <span className={myClass} />;
};

MilestoneDot.defaultProps = {
  type: "default",
  handle: "",
  mini: false
};

MilestoneDot.propTypes = {
  type: PropTypes.string,
  mini: PropTypes.bool,
  handle: PropTypes.string
};

export default MilestoneDot;
