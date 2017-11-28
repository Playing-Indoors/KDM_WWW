import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import { Modal, ModalBody, ModalHeader, ModalFooter, Button } from "reactstrap";
import classNames from "classnames";
import { setAttributes } from "../../actions/attributes";
import Widget from "../../components/Widget/Widget";
import WidgetFooter from "../../components/Widget/WidgetFooter";

class Retired extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
      showModal: props.show
    };
    // Binding Events
    this.handleModalToggle = this.handleModalToggle.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    const newState = {};
    if (this.props.show !== nextProps.show) {
      newState.showModal = nextProps.show;
    }
    if (this.props.value !== nextProps.value) {
      newState.value = nextProps.value;
    }
    this.setState({
      ...newState
    });
  }
  // Resets our data
  resetData() {
    this.setState({
      value: this.props.value
    });
  }
  // Toggles the visibility of the modal
  handleModalToggle() {
    this.setState({
      showModal: !this.state.showModal
    });
  }
  // Cancel event from the modal, reset the state.
  handleCancel() {
    this.handleModalToggle();
    this.resetData();
  }
  // Handle's the save and makes the API Call
  handleSave() {
    const userId = localStorage.getItem("userId");
    const data = {
      user_id: userId,
      retired: !this.state.value
    };
    this.handleModalToggle();
    // TODO: Khoa create setRetired action
    // /survivor/set_retired/<survivor_id>
    // this.props.setRetired(this.props.oid, data).catch(() => {
    //   this.resetData();
    // });
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
      <Modal isOpen={this.state.showModal} toggle={this.handleCancel}>
        <ModalHeader>Retire</ModalHeader>
        <ModalBody />
        <ModalFooter>
          {this.renderButton()}
          <Button onClick={this.handleCancel} color="link">
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

Retired.propTypes = {
  oid: PropTypes.string,
  show: PropTypes.bool,
  value: PropTypes.bool
};

Retired.defaultProps = {
  oid: "",
  show: false,
  value: false
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      setAttributes
    },
    dispatch
  );
}

export default connect(null, mapDispatchToProps)(Retired);
