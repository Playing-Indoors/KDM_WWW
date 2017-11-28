import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import { Modal, ModalBody, ModalHeader, ModalFooter, Button } from "reactstrap";
import { setBleeding } from "../../actions/attributes";
import NumberIncrement from "../../components/NumberIncrement/NumberIncrement";
import Stat from "../../components/Stats/Stats";
import MilestoneDots from "../../components/MilestoneDots/MilestoneDots";

// Builds our milestones object
function buildMilestones(limit) {
  const milestones = [
    {
      event: "ui_prompts",
      handle: "dead",
      values: [limit]
    }
  ];
  return milestones;
}

class Bleeding extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Bleeding",
      showModal: false,
      milestones: buildMilestones(this.props.limit),
      amount: props.amount
    };
    // Binding Events
    this.handleModalToggle = this.handleModalToggle.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleModalConfirm = this.handleModalConfirm.bind(this);
    this.handleUpdateAmount = this.handleUpdateAmount.bind(this);
  }
  // Updates props
  componentWillReceiveProps(nextProps) {
    this.setState({
      amount: nextProps.amount,
      milestones: buildMilestones(nextProps.limit)
    });
  }
  // Toggles the visibility of the modal
  handleModalToggle() {
    this.setState({
      showModal: !this.state.showModal
    });
  }
  // Resets our data
  resetData() {
    this.setState({
      amount: this.props.amount
    });
  }
  // Cancel event from the modal, reset the state.
  handleCancel() {
    this.handleModalToggle();
    this.resetData();
  }
  // Handle's the save and makes the API Call
  handleModalConfirm() {
    const userId = localStorage.getItem("userId");
    const data = {
      user_id: userId,
      value: this.state.amount
    };
    this.handleModalToggle();
    this.props.setBleeding(this.props.oid, data).catch(() => {
      this.resetData();
    });
  }
  // Pass to Number Increment to update amount
  handleUpdateAmount(amount) {
    this.setState({ amount });
  }
  // Determines the color of the confirm button
  confirmColor() {
    if (this.state.amount === this.props.amount) {
      return "light";
    }
    return "primary";
  }
  // Renders our component
  render() {
    return (
      <div className={"widget survivorBleeding"}>
        <header className={"widget-header widget-header--link"}>
          <div className="widget-header-title">{this.state.title}</div>
        </header>
        <button
          type="button"
          className="widget-content"
          onClick={this.handleModalToggle}
        >
          <Stat amount={this.state.amount}>
            <MilestoneDots
              current={this.state.amount}
              size={this.props.limit}
              milestones={this.state.milestones}
              mini
            />
          </Stat>
        </button>
        <Modal isOpen={this.state.showModal} toggle={this.handleCancel}>
          <ModalHeader>Adjust {this.state.title}</ModalHeader>
          <ModalBody>
            <NumberIncrement
              amount={this.state.amount}
              min={0}
              max={this.props.limit}
              updateAmount={this.handleUpdateAmount}
            />
            <MilestoneDots
              current={this.state.amount}
              size={this.props.limit}
              milestones={this.state.milestones}
            />
          </ModalBody>
          <ModalFooter>
            <Button
              color={this.confirmColor()}
              onClick={this.handleModalConfirm}
            >
              Confirm
            </Button>
            <Button onClick={this.handleCancel} color="link">
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

Bleeding.propTypes = {
  amount: PropTypes.number,
  oid: PropTypes.string,
  limit: PropTypes.number,
  setBleeding: PropTypes.func
};

Bleeding.defaultProps = {
  amount: 0,
  limit: 5,
  oid: ""
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      setBleeding
    },
    dispatch
  );
}

export default connect(null, mapDispatchToProps)(Bleeding);
