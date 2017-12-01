import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import { browserHistory } from "react-router";
import { Button, ModalBody, ModalHeader, ModalFooter } from "reactstrap";
import LoadingSpinner from "../../../components/LoadingSpinner/LoadingSpinner";
import { postLogs } from "../../../actions/log";

class LogSurvivor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      survivorId: "",
      log: [],
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
  renderLog() {
    if (this.state.log.length > 0) {
      return this.state.log.map(item => (
        <div key={item._id.$oid}>
          <small>
            LY {item.ly}:&nbsp;
            {item.event}
          </small>
        </div>
      ));
    }
    return null;
  }

  render() {
    if (this.state.isLoading) {
      return <LoadingSpinner />;
    }
    return (
      <div>
        <ModalHeader>Survivor Log</ModalHeader>
        <ModalBody>{this.renderLog()}</ModalBody>
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
