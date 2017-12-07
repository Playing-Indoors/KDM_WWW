import React, { Component } from "react";
import PropTypes from "prop-types";

class LogRecord extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      action: ""
    };
  }
  componentWillMount() {
    const newState = {};
    let event = this.props.event;
    const name = this.props.event.replace(/ .*/, "");
    if (name.indexOf("@") !== -1) {
      newState.name = name;
      event = event.substring(name.length);
    }

    this.setState({
      ...newState
    });
  }
  // parseName() {
  //   const user = this.props.event.replace(/ .*/, "");
  //   if (user.indexOf("@") !== -1) {
  //     return user;
  //   }
  //   return null;
  // }
  // parseEvent() {
  //   const name = this.parseName();
  //   if (name) {
  //     const subName = this.props.event.substring(name.length);

  //     return subName;
  //   }
  //   return this.props.event;
  // }
  renderDate() {
    if (this.props.date) {
      const date = new Date(this.props.date);
      // const date = this.props.date;
      return <div>{date.toString()}</div>;
    }
    return null;
  }
  renderAuthor() {}
  render() {
    return (
      <div className="logRecord">
        {this.props.event}
        {/* <div className="logRecord-name">{this.parseEvent()}</div>
        <div>{this.parseName()}</div>
        {this.renderDate()} */}
      </div>
    );
  }
}

LogRecord.propTypes = {
  event: PropTypes.string,
  author: PropTypes.string,
  date: PropTypes.number
};

export default LogRecord;
