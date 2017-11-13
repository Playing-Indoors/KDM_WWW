import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import { Modal, ModalBody, ModalHeader, ModalFooter, Button } from "reactstrap";
import { setSettlementAttributes } from "../../actions/settlements";
import NumberIncrement from "../../components/NumberIncrement/NumberIncrement";
import Stat from "../../components/Stats/Stats";
import WidgetVariant from "../../components/Widget/WidgetVariant";

class SurvivalLimit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      title: "Survival Limit",
      amount: props.amount
    };
    this.handleModalToggle = this.handleModalToggle.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleModalConfirm = this.handleModalConfirm.bind(this);
    this.handleUpdateAmount = this.handleUpdateAmount.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      amount: nextProps.amount
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
      attribute: "survival_limit",
      value: this.state.amount
    };
    this.handleModalToggle();
    this.props.setSettlementAttributes(this.props.oid, data).catch(() => {
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
      <div className={"widget settlementSurvival"}>
        <header className={"widget-header widget-header--link"}>
          <div className="widget-header-title">{this.state.title}</div>
        </header>
        <button
          type="button"
          className="widget-content"
          onClick={this.handleModalToggle}
        >
          <Stat amount={this.state.amount} />
        </button>
        <Modal isOpen={this.state.showModal} toggle={this.handleCancel}>
          <ModalHeader>Adjust {this.state.title}</ModalHeader>
          <ModalBody>
            <NumberIncrement
              amount={this.state.amount}
              min={1}
              updateAmount={this.handleUpdateAmount}
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

SurvivalLimit.propTypes = {
  amount: PropTypes.number,
  oid: PropTypes.string,
  setSettlementAttributes: PropTypes.func
};

SurvivalLimit.defaultProps = {
  amount: 1,
  oid: ""
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      setSettlementAttributes
    },
    dispatch
  );
}

export default connect(null, mapDispatchToProps)(SurvivalLimit);
