import React, { Component } from "react";
import PropTypes from "prop-types";

// TODO RENAME THIS TO Stat.jsx :\

class Stats extends Component {
  // Renders our milestones and attaches their class
  renderMilestones() {
    if (!this.props.milestones) {
      return null;
    }
    return this.props.milestones.map((item, index) => {
      const filled =
        item.at <= this.props.amount
          ? "milestone--filled milestone--active"
          : "";
      return <span key={index} className={`milestone ${filled}`} />;
    });
  }
  // Status effects (tokens, armor, etc.)
  renderStatus() {
    if (!this.props.status) {
      return null;
    }
    return this.props.status.map((item, index) => (
      <span key={index} className={`status status--${item.type}`} />
    ));
  }
  renderAmount() {
    // Checks to see if we have a mask mapping (e.g. '-1': 'L')
    if (
      Object.prototype.hasOwnProperty.call(
        this.props.mask,
        `${this.props.amount}`
      )
    ) {
      return this.props.mask[`${this.props.amount}`];
    }
    return this.props.amount;
  }
  render() {
    return (
      <div className="stat">
        <div className="stat-num">{this.renderAmount()}</div>
        <div className="stat-milestone">
          {this.renderMilestones()}
          {this.props.children}
          {this.renderStatus()}
        </div>
        <div className="stat-title">{this.props.name}</div>
      </div>
    );
  }
}

Stats.propTypes = {
  name: PropTypes.string,
  amount: PropTypes.number,
  milestones: PropTypes.arrayOf(
    PropTypes.shape({
      at: PropTypes.number,
      name: PropTypes.string,
      type: PropTypes.string
    })
  ),
  status: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string
    })
  ),
  mask: PropTypes.shape(),
  children: PropTypes.node
};

Stats.defaultProps = {
  name: "",
  amount: 0,
  mask: {}
};

export default Stats;
