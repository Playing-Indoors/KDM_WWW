import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import { Modal, ModalBody, ModalHeader, ModalFooter, Button } from "reactstrap";
import { setAttributes } from "../../actions/attributes";
import NumberIncrement from "../../components/NumberIncrement/NumberIncrement";
import Stat from "../../components/Stats/Stats";
import MilestoneDots from "../../components/MilestoneDots/MilestoneDots";

class Courage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      title: "Courage",
      amount: props.amount
    };
    // Binding Events
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
      attribute: "Courage",
      value: this.state.amount
    };
    this.handleModalToggle();
    this.props.setAttributes(this.props.oid, data).catch(() => {
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
  renderStatAttribute() {
    console.warn("nothing");
    const list = this.props.abilitySurvivor.map(
      item => this.props.abilityAssets[item]
    );
    const courageList = list.filter(a => a.base_attribute === "Courage");
    if (courageList.length === 0) {
      return null;
    }
    return (
      <div className="statAttribute">
        {courageList.map(a => a.name).join(", ")}
      </div>
    );
  }
  // Renders our component
  render() {
    return (
      <div className={"widget survivorXP"}>
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
              current={this.props.amount}
              size={this.props.limit}
              milestones={this.props.milestones}
              mini
              onlyMilestones
            />
          </Stat>
          {this.renderStatAttribute()}
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
              milestones={this.props.milestones}
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

Courage.propTypes = {
  amount: PropTypes.number,
  oid: PropTypes.string,
  limit: PropTypes.number,
  milestones: PropTypes.arrayOf(
    PropTypes.shape({
      handle: PropTypes.string,
      values: PropTypes.arrayOf(PropTypes.number)
    })
  ),
  setAttributes: PropTypes.func
};

Courage.defaultProps = {
  amount: 0,
  oid: "",
  limit: 1,
  milestones: []
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      setAttributes
    },
    dispatch
  );
}

export default connect(null, mapDispatchToProps)(Courage);
