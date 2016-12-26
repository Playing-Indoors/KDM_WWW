import React, { Component } from 'react';

class StatAdjust extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title || '', // Once we start passing data, change this to empty
      number: props.number || 0,
      milestones: props.milestones || [],
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
      <div className="statSpend">
        <button
          type="button"
          onClick={() => { this.adjustSurvival('manual', -1); }}
          className="statSpend-change"
        >&ndash;</button>
        <div className="statSpend-num">0</div>
        <button type="button" onClick={() => { this.adjustSurvival('manual', 1); }} className="statSpend-change">+</button>
        <div className="statSpend-title">
          {this.state.title}
        </div>
        <div className="statSpend-subtitle">
          Prepared
        </div>
      </div>
    );
  }
}

StatAdjust.propTypes = {
  title: React.PropTypes.string,
  number: React.PropTypes.number,
  milestones: React.PropTypes.arrayOf(React.PropTypes.string),
};

export default StatAdjust;
