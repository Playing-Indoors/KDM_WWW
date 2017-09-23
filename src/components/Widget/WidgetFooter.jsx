import React from "react";
import PropTypes from "prop-types";

class WidgetFooter extends React.Component {
  render() {
    return <div className="widget-footer">{this.props.children}</div>;
  }
}

WidgetFooter.propTypes = {
  children: PropTypes.node
};

export default WidgetFooter;
