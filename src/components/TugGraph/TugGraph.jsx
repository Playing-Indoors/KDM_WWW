import React, { Component } from 'react';

// Called Tug Graph because its a tug of war. I dunno, couldn't think of the real name ;)
class TugGraph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: parseInt(this.props.aValue) + parseInt(this.props.bValue),
    };
  }
  render() {
    return (
      <div className="tugGraph">
        <h3 className="tugGraph-title">{this.props.title}</h3>
        <div className="tugGraph-labels">
          <div className="tugGraph-label">
            <strong>{this.props.aValue}</strong>
            {this.props.aLabel}
          </div>
          <div className="tugGraph-label">
            <strong>{this.props.bValue}</strong>
            {this.props.bLabel}
          </div>
        </div>
        <progress className="tugGraph-progress" max={this.state.total} value={this.props.aValue} />
        <div className="tugGraph-total">{this.state.total} Total {this.props.title} Created</div>
      </div>
    );
  }
}

export default TugGraph;
