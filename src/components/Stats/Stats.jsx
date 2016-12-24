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
      title: props.title || '', // Once we start passing data, change this to empty
      number: props.number || 0,
      milestones: props.milestones || [],
      // [
      //   'is-empty',  // empty
      //   'is-passive',  // filled in
      //   'is-active',  // active
      // ],
    };
  }
  // Renders our milestones and attaches their class
  renderMilestones() {
    return this.state.milestones.map((item, index) => {
      return <span key={index} className={`milestone milestone--${item}`} />;
    });
  }
  render() {
    return (
      <div className="stat">
        <div className="stat-num">{this.state.number}</div>
        <div className="stat-milestone">
          {this.renderMilestones()}
        </div>
        <div className="stat-title">{this.state.title}</div>
      </div>
    );
  }
}

Stats.propTypes = {
  title: React.PropTypes.string,
  // number: React.PropTypes.number,
  milestones: React.PropTypes.arrayOf(React.PropTypes.string),
};

export default Stats;
