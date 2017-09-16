import React, { Component } from "react";
import PropTypes from "prop-types";
import { ModalFooter, Button } from "reactstrap";
import NumberIncrement from "../../components/NumberIncrement/NumberIncrement";
import Stat from "../../components/Stats/Stats";
import WidgetVariant from "../../components/Widget/WidgetVariant";

class DefeatedMonsters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleModal: false,
      title: "Defeated Monsters",
      amount: props.amount
    };
    this.updateAmount = this.updateAmount.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleConfirm = this.handleConfirm.bind(this);
    this.handleModal = this.handleModal.bind(this);
  }
  handleModal() {
    this.setState({
      toggleModal: !this.state.toggleModal
    });
  }
  handleCancel() {
    this.setState({
      amount: this.props.amount
    });
    this.handleModal();
  }
  handleConfirm() {
    // dispatches data to api to save
    this.handleModal();
  }
  updateAmount(amount) {
    console.log(`Amount changed to ${amount}`);
    this.setState({ amount });
  }
  renderConfirm() {
    if (this.state.amount === this.props.amount) {
      return (
        <Button color="secondary" onClick={this.handleModal}>
          Confirm
        </Button>
      );
    }
    return (
      <Button color="primary" onClick={this.handleModal}>
        Confirm
      </Button>
    );
  }
  render() {
    return (
      <WidgetVariant
        title={this.state.title}
        toggleModal={this.state.toggleModal}
        myClass={"defeatedMonsters"}
      >
        {/* This is in the widget */}
        <Stat amount={this.state.amount} />
        {/* This is in the modal */}
        <NumberIncrement
          amount={this.state.amount}
          min={1}
          updateAmount={this.updateAmount}
        />
        <ModalFooter>
          {this.renderConfirm()}
          <Button onClick={this.handleCancel} color="link">
            Cancel
          </Button>
        </ModalFooter>
      </WidgetVariant>
    );
  }
}

DefeatedMonsters.propTypes = {
  amount: PropTypes.number
};

DefeatedMonsters.defaultProps = {
  amount: 0
};

export default DefeatedMonsters;
