import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import { browserHistory } from "react-router";
import { Button, ModalBody, ModalHeader, ModalFooter } from "reactstrap";
import LogRecord from "../../../components/LogRecord/LogRecord";
import LoadingSpinner from "../../../components/LoadingSpinner/LoadingSpinner";
import { postLogs } from "../../../actions/log";

class LogSurvivor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      survivorId: "",
      log: [],
      page: 0,
      perPage: 40,
      isLoading: true
    };
    this.handleClose = this.handleClose.bind(this);
  }
  componentWillMount() {
    this.prepareComponentState(this.props);
  }
  componentWillReceiveProps(nextProps) {
    this.prepareComponentState(nextProps);
  }
  prepareComponentState(props) {
    const id = props.params.oid;
    const data = { survivor_id: props.params.survivorId };
    postLogs(id, data)
      .then(res => {
        console.log("OK LOGS", res);
        this.setState({
          log: res.data,
          isLoading: false
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
  handleClose() {
    browserHistory.replace(
      `/settlements/${this.props.params.oid}/survivors/${this.props.params
        .survivorId}`
    );
  }
  handlePager(step) {
    this.setState(prevState => ({
      page: prevState.page + step
    }));
  }
  renderLog() {
    if (this.state.log.length > 0) {
      const begin = this.state.page * this.state.perPage;
      const end = Math.min(begin + this.state.perPage, this.state.log.length);
      const arr = this.state.log.slice(begin, end);
      return arr.map(item => <LogRecord log={item} key={item._id.$oid} />);
    }
    return null;
  }
  renderPrev() {
    return (
      <Button
        color="link"
        onClick={() => {
          this.handlePager(-1);
        }}
        disabled={this.state.page === 0}
      >
        Prev
      </Button>
    );
  }
  renderNext() {
    const current = this.state.perPage * this.state.page + this.state.perPage;
    return (
      <Button
        color="link"
        onClick={() => {
          this.handlePager(1);
        }}
        disabled={current >= this.state.log.length}
      >
        Next
      </Button>
    );
  }
  render() {
    if (this.state.isLoading) {
      return <LoadingSpinner />;
    }
    return (
      <div>
        <ModalHeader>Survivor Log</ModalHeader>
        <ModalBody>
          <div className="layout layout--log">
            {this.renderLog()}
            <div className="text-center">
              {this.renderPrev()}
              {this.renderNext()}
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button onClick={this.handleClose} color="link">
            Close
          </Button>
        </ModalFooter>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    settlementData: state.settlementData
  };
}

export default connect(mapStateToProps, null)(LogSurvivor);
