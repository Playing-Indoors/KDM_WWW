import React, { Component } from "react";
import PropTypes from "prop-types";

class CardListMeta extends Component {
  renderLabel() {
    if (this.props.label) {
      return <div className="cardList-meta-item-label">{this.props.label}</div>;
    }
    return null;
  }
  render() {
    return (
      <div className="cardList-meta-item">
        {this.renderLabel()}
        <div className="cardList-meta-item-value">{this.props.value}</div>
      </div>
    );
  }
}

CardListMeta.defaultProps = {
  label: "",
  value: 0
};

CardListMeta.propTypes = {
  label: PropTypes.string,
  value: PropTypes.number
};

export default CardListMeta;
