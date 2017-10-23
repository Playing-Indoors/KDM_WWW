import React, { Component } from "react";
import PropTypes from "prop-types";
import { ModalFooter, Button } from "reactstrap";
import NumberIncrement from "../../components/NumberIncrement/NumberIncrement";
import Stat from "../../components/Stats/Stats";
import StatGroup from "../../components/Stats/StatsGroup";
import MilestoneDots from "../../components/MilestoneDots/MilestoneDots";
import WidgetVariant from "../../components/Widget/WidgetVariant";

class Armor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleModal: false,
      title: "Armor",
      insanity: props.brain,
      head: props.head,
      arms: props.arms,
      body: props.body,
      waist: props.waist,
      legs: props.legs,
      min: -2
    };
    // Binding Events
    this.updateAmount = this.updateAmount.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleConfirm = this.handleConfirm.bind(this);
    this.handleModal = this.handleModal.bind(this);
  }
  // Controls opening up the modal
  handleModal() {
    this.setState({
      toggleModal: !this.state.toggleModal
    });
  }
  // Cancel event from the modal, reset the state.
  handleCancel() {
    this.setState({});
    this.handleModal();
  }
  // Handle's the save and makes the API Call
  handleConfirm() {
    this.handleModal();
  }
  // Function to pass to Number Increment
  handleUpdateAmount(type, amount) {
    this.setState({
      [type]: amount
    });
  }
  // We pass the confirm function into the modal so that we have a pending state
  renderConfirm() {
    // Disable confirm unless we've changed data
    if (this.state.amount === this.props.amount) {
      return (
        <Button color="light" onClick={this.handleConfirm}>
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
          type="armor"
          name={"Insanity"}
          amount={this.state.insanity}
          min={-1}
          max={this.state.max}
          updateAmount={amount => this.handleUpdateAmount(amount, "insanity")}
        />
        <NumberIncrement
          type="armor"
          name={"Head"}
          amount={this.state.head}
          min={this.state.min}
          updateAmount={amount => this.handleUpdateAmount(amount, "head")}
        />
        <NumberIncrement
          type="armor"
          name={"Arms"}
          amount={this.state.arms}
          min={this.state.min}
          updateAmount={amount => this.handleUpdateAmount(amount, "arms")}
        />
        <NumberIncrement
          type="armor"
          name={"Body"}
          amount={this.state.body}
          min={this.state.min}
          updateAmount={amount => this.handleUpdateAmount(amount, "body")}
        />
        <NumberIncrement
          type="armor"
          name={"Waist"}
          amount={this.state.waist}
          min={this.state.min}
          updateAmount={amount => this.handleUpdateAmount(amount, "waist")}
        />
        <NumberIncrement
          type="armor"
          name={"Legs"}
          amount={this.state.legs}
          min={this.state.min}
          updateAmount={amount => this.handleUpdateAmount(amount, "legs")}
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
        myClass={"survivorArmor"}
      >
        {/* We use this.props so we only show the saved value */}
        <StatGroup>
          <Stat name={"Brain"} amount={this.props.brain} />
          <Stat name={"Head"} amount={this.props.head} />
          <Stat name={"Arms"} amount={this.props.arms} />
          <Stat name={"Body"} amount={this.props.body} />
          <Stat name={"Waist"} amount={this.props.waist} />
          <Stat name={"Legs"} amount={this.props.legs} />
        </StatGroup>
        {this.renderModalBody()}
        {this.renderModalFooter()}
      </WidgetVariant>
    );
  }
}

Armor.defaultProps = {
  oid: "",
  brain: 0,
  head: 0,
  arms: 0,
  body: 0,
  waist: 0,
  legs: 0
};

Armor.propTypes = {
  oid: PropTypes.string,
  brain: PropTypes.number,
  head: PropTypes.number,
  arms: PropTypes.number,
  body: PropTypes.number,
  waist: PropTypes.number,
  legs: PropTypes.number
};

export default Armor;
