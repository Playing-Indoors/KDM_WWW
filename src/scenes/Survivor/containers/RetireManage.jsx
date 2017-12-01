import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { browserHistory } from "react-router";
import { Button, ModalBody, ModalHeader, ModalFooter } from "reactstrap";
import { setRetired } from "../../../actions/getSurvivor";

class RetireManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      originalValue: ""
    };
    // Binding Events
    this.handleSave = this.handleSave.bind(this);
  }
  componentWillMount() {
    this.prepareComponentState(this.props);
  }
  componentWillReceiveProps(nextProps) {
    this.prepareComponentState(nextProps);
  }
  prepareComponentState(props) {
    const newState = {};
    if (props.params && props.params.survivorId && props.settlementData) {
      const survivorId = props.params.survivorId;
      newState.survivorId = survivorId;

      const survivor = props.settlementData.user_assets.survivors.find(
        item => item.sheet._id.$oid === survivorId
      );
      newState.value = survivor.sheet.retired;
      newState.originalValue = survivor.sheet.retired;
    }
    this.setState({
      ...newState
    });
  }
  // Handle's the save and makes the API Call
  handleSave() {
    const userId = localStorage.getItem("userId");
    const data = {
      user_id: userId,
      retired: !this.state.value
    };
    this.handleClose();
    this.props.setRetired(this.props.oid, data).catch(() => {
      this.resetData();
    });
  }
  handleClose() {
    browserHistory.push(
      `/settlements/${this.props.params.oid}/survivors/${this.props.params
        .survivorId}`
    );
  }
  confirmColor() {
    if (this.state.value === this.state.originalValue) {
      return "light";
    }
    return "primary";
  }
  renderButton() {
    if (!this.state.value) {
      return (
        <Button color={"danger"} onClick={this.handleSave}>
          Force Retirement
        </Button>
      );
    }
    return (
      <Button color={"primary"} onClick={this.handleSave}>
        Bring out of Retirement
      </Button>
    );
  }
  // Renders our component
  render() {
    return (
      <div>
        <ModalHeader>Retire</ModalHeader>
        <ModalBody />
        <ModalFooter>
          {this.renderButton()}
          <Button onClick={this.handleClose} color="link">
            Cancel
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      setRetired
    },
    dispatch
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(RetireManage);
