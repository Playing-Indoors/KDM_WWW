import React, { Component } from "react";
import PropTypes from "prop-types";

// TODO RENAME THIS TO Stat.jsx :\

// This component renders our stats styles.
// handles the following data:
// title - String - defaults to ``
// number - int - defaults to 0
// milestones - array[string] - css class array for the milestones.
// --- Might look at making milestone an int type.
class Stats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      amount: props.amount,
      min: props.min || 0,
      max: props.max || 999
    };
  }
  // updates props
  componentWillReceiveProps(nextProps) {
    if (nextProps.amount) {
      this.setState({
        amount: nextProps.amount,
        max: nextProps.max
      });
    }
  }
  // Renders our milestones and attaches their class
  renderMilestones() {
    if (!this.props.milestones) {
      return null;
    }
    return this.props.milestones.map((item, index) => {
      const filled =
        item.at <= this.state.amount
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
  render() {
    return (
      <div className="stat">
        <div className="stat-num">{this.state.amount}</div>
        <div className="stat-milestone">
          {this.renderMilestones()}
          {this.props.children}
          {this.renderStatus()}
        </div>
        <div className="stat-title">{this.state.name}</div>
      </div>
    );
  }
}

Stats.propTypes = {
  name: PropTypes.string,
  amount: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
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
  children: PropTypes.node
};

export default Stats;
