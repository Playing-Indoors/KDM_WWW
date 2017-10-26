import React, { Component } from "react";
import PropTypes from "prop-types";
import { ModalFooter, Button } from "reactstrap";
import { setSurvival } from "../../actions/abilities";
import NumberIncrement from "../../components/NumberIncrement/NumberIncrement";
import Stat from "../../components/Stats/Stats";
import WidgetVariant from "../../components/Widget/WidgetVariant";
import MilestoneDots from "../../components/MilestoneDots/MilestoneDots";

function buildMilestones(actions) {
  const available = {
    event: "ui_prompts",
    handle: "availSurvival",
    values: []
  };
  const unavailable = {
    event: "ui_prompts",
    handle: "unavailSurvival",
    values: []
  };

  const prevent = {
    event: "ui_prompts",
    handle: "preventSurvival",
    values: []
  };

  actions.forEach((item, index) => {
    if (item.available) {
      available.values.push(index + 1);
    } else if (item.title_tip.includes("prevent")) {
      prevent.values.push(index + 1);
    } else {
      unavailable.values.push(index + 1);
    }
  });

  const milestones = [available, unavailable, prevent];

  return milestones;
}

class Survival extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleModal: false,
      title: "Survival",
      amount: props.amount,
      milestones: buildMilestones(this.props.actions)
    };
    // Binding Events
    this.updateAmount = this.updateAmount.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleConfirm = this.handleConfirm.bind(this);
    this.handleModal = this.handleModal.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      amount: nextProps.amount,
      milestones: buildMilestones(nextProps.actions)
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
    console.warn("Saving survival for survivor oid", this.props.oid);
    let userId = localStorage.getItem("userId");
    let data = {
      user_id: userId,
      value: this.state.amount
    };
    setSurvival(this.props.oid, data)
      .then(res => {
        this.handleModal();
      })
      .catch(err => {
        console.log("Error:  ", err);
      });
  }
  // Function to pass to Number Increment
  updateAmount(amount) {
    this.setState({ amount });
  }
  checkActionsCurrent() {
    let count = 0;
    this.props.actions.forEach(item => {
      if (!item.title_tip.includes("unlocked")) {
        count += 1;
      }
    });

    return count;
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
  // Displays the survivor actions
  renderActions() {
    return this.props.actions.map(action => (
      <span className={action.available ? "is-active" : ""} key={action.handle}>
        {action.name}
      </span>
    ));
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
          canIncrease={this.props.canIncrease}
          canDecrease={this.props.canDecrease}
        />
        <div className="survivalSkills">{this.renderActions()}</div>
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
        myClass={"survivorSurvival"}
      >
        {/* We use this.props so we only show the saved value */}
        <Stat amount={this.props.amount}>
          <MilestoneDots
            current={this.checkActionsCurrent()}
            size={this.props.actions.length}
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

Survival.propTypes = {
  amount: PropTypes.number,
  oid: PropTypes.string,
  limit: PropTypes.number,
  canDecrease: PropTypes.bool,
  canIncrease: PropTypes.bool,
  actions: PropTypes.arrayOf(PropTypes.object)
};

Survival.defaultProps = {
  amount: 0,
  limit: 1,
  oid: "",
  canDecrease: true,
  canIncrease: true,
  actions: []
};

export default Survival;
