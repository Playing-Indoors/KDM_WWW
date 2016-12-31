import React, { Component } from 'react';

class StatAdjust extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name, // Once we start passing data, change this to empty
      amount: props.amount,
      min: props.min || 0,
      max: props.max,
      tempAmount: props.amount,
      milestones: props.milestones,
    };
  }
  onAdjustAmount(amount = -1) {
    // Temporary adjust value
    let adjust = this.state.tempAmount + amount;
    // Make sure we don't go beyond our min/max
    adjust = Math.min(Math.max(adjust, this.state.min), this.state.max);
    console.log(`${this.state.name} changed by ${amount} to ${adjust}`);
    // Need to pop this up or redux it up
    this.setState({
      tempAmount: adjust,
    });
  }
  // Renders our milestones and attaches their class
  renderMilestones() {
    return this.state.milestones.map((item, index) =>
      <span key={index} className={`milestone milestone--${item}`} />,
    );
  }
  render() {
    return (
      <div className="statSpend">
        <button
          type="button"
          onClick={() => { this.onAdjustAmount(-1); }}
          className="statSpend-change"
        >&ndash;</button>
        <div className="statSpend-num">{this.state.tempAmount}</div>
        <button type="button" onClick={() => { this.onAdjustAmount(1); }} className="statSpend-change">+</button>
        <div className="statSpend-title">
          {this.state.name}
        </div>
        <div className="statSpend-subtitle">
        </div>
      </div>
    );
  }
}

StatAdjust.propTypes = {
  name: React.PropTypes.string,
  amount: React.PropTypes.number.isRequired,
  min: React.PropTypes.number,
  max: React.PropTypes.number.isRequired,
  milestones: React.PropTypes.arrayOf(React.PropTypes.string),
};

export default StatAdjust;
