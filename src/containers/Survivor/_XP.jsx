import React, { Component } from "react";
import PropTypes from "prop-types";
import { ModalFooter, Button } from "reactstrap";
import NumberIncrement from "../../components/NumberIncrement/NumberIncrement";
import Stat from "../../components/Stats/Stats";
import MilestoneDots from "../../components/MilestoneDots/MilestoneDots";
import WidgetVariant from "../../components/Widget/WidgetVariant";

class XP extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleModal: false,
      title: "Hunt XP",
      amount: props.amount,
      limit: props.milestones[props.milestones.length - 1] + 1
    };
    // Binding Events
    this.updateAmount = this.updateAmount.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleConfirm = this.handleConfirm.bind(this);
    this.handleModal = this.handleModal.bind(this);
  }
  // Get the filled amount of boxes
  getFilled() {
    // Reverse the array
    const reverse = this.props.milestones.slice().reverse();
    // Loop through to find the first (or last in the original array) instance
    // where the milestone is reached.
    const current = reverse.findIndex(
      milestone => this.state.amount >= milestone
    );
    // If we don't find anything, then none are filled
    if (current === -1) {
      return 0;
    }
    return reverse.length - current;
  }
  // Controls opening up the modal
  handleModal() {
    this.setState({
      toggleModal: !this.state.toggleModal
    });
  }
  // Cancel event from the modal, reset the state.
  handleCancel() {
    this.setState({
      amount: this.props.amount
    });
    this.handleModal();
  }
  // Handle's the save and makes the API Call
  handleConfirm() {
    // TODO: KHOA SAVE THIS SHIT.
    console.warn("Saving xp for survivor oid", this.props.oid);
    this.handleModal();
  }
  // Function to pass to Number Increment
  updateAmount(amount) {
    this.setState({ amount });
  }
  // We pass the confirm function into the modal so that we have a pending state
  renderConfirm() {
    // Disable confirm unless we've changed data
    if (this.state.amount === this.props.amount) {
      return (
        <Button color="secondary" onClick={this.handleConfirm}>
          Confirm
        </Button>
      );
    }
    return (
      <Button color="primary" onClick={this.handleConfirm}>
        Confirm
      </Button>
    );
  }
  // Controls what shows inside of the modal
  renderModalBody() {
    return (
      <div>
        <NumberIncrement
          amount={this.state.amount}
          min={0}
          max={this.state.limit}
          updateAmount={this.updateAmount}
        />
        <MilestoneDots
          current={this.getFilled()}
          count={this.props.milestones.length}
        />
      </div>
    );
  }
  // Controls the functionality of modal footer buttons
  renderModalFooter() {
    return (
      <ModalFooter>
        {this.renderConfirm()}
        <Button onClick={this.handleCancel} color="link">
          Cancel
        </Button>
      </ModalFooter>
    );
  }
  render() {
    return (
      <WidgetVariant
        title={this.state.title}
        toggleModal={this.state.toggleModal}
        myClass={"survivorXP"}
      >
        {/* We use this.props so we only show the saved value */}
        <Stat amount={this.props.amount}>
          <MilestoneDots
            current={this.getFilled()}
            count={this.props.milestones.length}
            mini
          />
        </Stat>
        {this.renderModalBody()}
        {this.renderModalFooter()}
      </WidgetVariant>
    );
  }
}

XP.propTypes = {
  amount: PropTypes.number,
  oid: PropTypes.string,
  milestones: PropTypes.arrayOf(PropTypes.number)
};

XP.defaultProps = {
  amount: 0,
  oid: "",
  milestones: [2, 6, 10, 15]
};

export default XP;
