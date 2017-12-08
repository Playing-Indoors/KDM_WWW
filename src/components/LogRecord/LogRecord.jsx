import React, { Component } from "react";
import PropTypes from "prop-types";
import distanceInWordsToNow from "date-fns/distance_in_words_to_now";

class LogRecord extends Component {
  constructor(props) {
    super(props);
    this.state = {
      event: "",
      author: "The Watcher"
    };
  }
  componentWillMount() {
    const newState = {};
    let event = this.props.log.event;
    const eventArr = this.props.log.event.split(" ");
    if (eventArr[0].indexOf("@") !== -1) {
      newState.author = eventArr.splice(0, 1);
      event = eventArr.join(" ");
    }

    const date = new Date(this.props.log.created_on.$date);
    newState.date = distanceInWordsToNow(date, {
      includeSeconds: true,
      addSuffix: true
    });

    // Add emphasis
    newState.event = event.replace(/(['])(\\?.)*?\1/g, "<em>$&</em>");

    this.setState({
      ...newState
    });
  }
  render() {
    return (
      <div className="logRecord" tabIndex="0">
        <div
          className="logRecord-name"
          dangerouslySetInnerHTML={{ __html: this.state.event }}
        />
        <div className="logRecord-details ">
          {this.state.date} by {this.state.author}
        </div>
      </div>
    );
  }
}

LogRecord.defaultProps = {
  log: {
    created_on: {
      $date: null
    },
    event: "",
    event_type: "",
    ly: 0
  }
};

LogRecord.propTypes = {
  log: PropTypes.shape({
    created_on: PropTypes.shape({
      $date: PropTypes.number
    }),
    event: PropTypes.string,
    event_type: PropTypes.string,
    ly: PropTypes.number
  })
};

export default LogRecord;
