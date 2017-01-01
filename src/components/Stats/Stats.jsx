import React, { Component } from 'react';

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
      // Expected data object
      name: props.name,
      amount: props.amount,
      milestones: props.milestones,
      min: props.min || 0,
      max: props.max,
      // [
      //   'is-empty',  // empty
      //   'is-passive',  // filled in
      //   'is-active',  // active
      // ],
    };
  }
  // Renders our milestones and attaches their class
  renderMilestones() {
    if (!this.state.milestones) {
      return null;
    }
    return this.state.milestones.map((item, index) => {
      const filled = (item <= this.state.amount) ? 'milestone--filled milestone--active' : '';
      return <span key={index} className={`milestone ${filled}`} />;
    });
  }
  render() {
    return (
      <div className="stat">
        <div className="stat-num">{this.state.amount}</div>
        <div className="stat-milestone">
          {this.renderMilestones()}
        </div>
        <div className="stat-title">{this.state.name}</div>
      </div>
    );
  }
}

Stats.propTypes = {
  name: React.PropTypes.string,
  amount: React.PropTypes.number,
  min: React.PropTypes.number,
  max: React.PropTypes.number,
  // milestones: React.PropTypes.arrayOf(React.PropTypes.number),
};

export default Stats;
