import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Widget from "../../components/Widget/Widget";

class Timeline extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.settlementData) {
      this.setState({
        settlementData: nextProps.settlementData
      });
    }
  }
  renderEvent(events) {
    if (events) {
      return events.map(event => {
        return <div>{event.name}</div>;
      });
    }
  }
  renderYear() {
    if (this.props.settlementData) {
      return this.props.settlementData.sheet.timeline.map(year => {
        return (
          <Widget title={`Lantern Year ${year.year}`} key={year.year}>
            {this.renderEvent(year.showdown_event)}
            {this.renderEvent(year.settlement_event)}
            {this.renderEvent(year.nemesis_encounter)}
            {this.renderEvent(year.special_showdown)}
            {this.renderEvent(year.story_event)}
          </Widget>
        );
      });
    }
    return null;
  }
  render() {
    return <div>{this.renderYear()}</div>;
  }
}

function mapStateToProps(state) {
  return {
    settlementData: state.settlementData
  };
}

export default connect(mapStateToProps, null)(Timeline);
