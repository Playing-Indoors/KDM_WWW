import React, { Component } from 'react';

class Stats extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: {
        title: 'Title',
        number: 2,
        milestones: [
          'is-empty',  // empty
          'is-passive',  // filled in
          'is-active',  // active
        ],
      },
    }
  }
  renderMilestones() {
    return this.state.data.milestones.map((item, index )=> {
      return (
        <span key={index} className={item}></span>
      );
    });
  }
  render() {
    return (
      <div className="stat">
        <div className="stat-num">{this.state.data.number}</div>
        <div className="stat-milestone">
          {this.renderMilestones()}
        </div>
        <div className="stat-title">{this.state.data.title}</div>
      </div>
    )
  }
}

export default Stats;
