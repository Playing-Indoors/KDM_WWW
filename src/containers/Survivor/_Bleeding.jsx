import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import { ModalFooter, Button } from "reactstrap";
import { setBleeding } from "../../actions/attributes";
import NumberIncrement from "../../components/NumberIncrement/NumberIncrement";
import Stat from "../../components/Stats/Stats";
import MilestoneDots from "../../components/MilestoneDots/MilestoneDots";
import WidgetVariant from "../../components/Widget/WidgetVariant";

function buildMilestones(limit) {
  // const bleeding = Array(limit - 1)
  //   .fill()
  //   .map((x, i) => i + 1);
  const milestones = [
    // {
    //   event: "ui_prompts",
    //   handle: "bleeding",
    //   values: bleeding
    // },
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
      toggleModal: false,
      title: "Bleeding",
      milestones: buildMilestones(this.props.limit),
      amount: props.amount
    };
    // Binding Events
    this.updateAmount = this.updateAmount.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleConfirm = this.handleConfirm.bind(this);
    this.handleModal = this.handleModal.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      amount: nextProps.amount
    });
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
    console.warn("Saving Bleeding for survivor oid", this.props.oid);

    const userId = localStorage.getItem("userId");
    const data = {
      user_id: userId,
      value: this.state.amount
    };
    this.props.setBleeding(this.props.oid, data);
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
          amount={this.state.amount}
          min={0}
          max={this.props.limit}
          updateAmount={this.updateAmount}
        />
        <MilestoneDots
          current={this.state.amount}
          size={this.props.limit}
          milestones={this.state.milestones}
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
        myClass={"survivorBleeding"}
      >
        {/* We use this.props so we only show the saved value */}
        <Stat amount={this.props.amount}>
          <MilestoneDots
            current={this.props.amount}
            size={this.props.limit}
            milestones={this.state.milestones}
            mini
          />
        </Stat>
        {this.renderModalBody()}
        {this.renderModalFooter()}
      </WidgetVariant>
    );
  }
}

Bleeding.propTypes = {
  amount: PropTypes.number,
  oid: PropTypes.string,
  limit: PropTypes.number
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
