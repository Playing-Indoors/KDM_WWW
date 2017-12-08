import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { browserHistory } from "react-router";
import { Input, Button, ModalBody, ModalHeader, ModalFooter } from "reactstrap";
import { controlsOfDeath } from "../../../actions/getSurvivor";

class DeathRecord extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      originalValue: "",
      text: "",
      year: 0
    };
    // Binding Events
    this.handleTextInput = this.handleTextInput.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleClose = this.handleClose.bind(this);
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

      newState.year = props.settlementData.sheet.lantern_yearl;

      const survivor = props.settlementData.user_assets.survivors.find(
        item => item.sheet._id.$oid === survivorId
      );
      newState.value = survivor.sheet.dead;
      newState.originalValue = survivor.sheet.dead;
    }
    this.setState({
      ...newState
    });
  }
  handleTextInput(event) {
    this.setState({ text: event.target.value });
  }
  handleClose() {
    browserHistory.push(
      `/settlements/${this.props.params.oid}/survivors/${this.props.params
        .survivorId}`
    );
  }
  // Handle's the save and makes the API Call
  handleSave() {
    const userId = localStorage.getItem("userId");
    const data = {
      user_id: userId
    };
    if (this.state.value) {
      data.dead = false;
    } else {
      data.dead = true;
      data.died_in = this.state.year;
      data.cause_of_death = this.state.text;
    }
    // TODO: Khoa create setDeath action
    // /survivor/set_Death/<survivor_id>
    this.props.controlsOfDeath(this.state.survivorId, data).then(() => {
      this.handleClose();
    });
  }
  renderText() {
    if (!this.state.value) {
      return (
        <Input
          type="text"
          placeholder="Enter cause of death..."
          value={this.state.text}
          onChange={this.handleTextInput}
        />
      );
    }
    return null;
  }
  renderButton() {
    if (!this.state.value) {
      return (
        <Button color={"danger"} onClick={this.handleSave}>
          Kill Survivor
        </Button>
      );
    }
    return (
      <Button color={"primary"} onClick={this.handleSave}>
        Resurrect Survivor
      </Button>
    );
  }
  // Renders our component
  render() {
    return (
      <div>
        <ModalHeader>Log Death</ModalHeader>
        <ModalBody>{this.renderText()}</ModalBody>
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
      controlsOfDeath
    },
    dispatch
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(DeathRecord);
