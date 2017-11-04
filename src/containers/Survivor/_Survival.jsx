import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import { Modal, ModalBody, ModalHeader, ModalFooter, Button } from "reactstrap";
import classNames from "classnames";
import { setSurvival } from "../../actions/attributes";
import NumberIncrement from "../../components/NumberIncrement/NumberIncrement";
import Stat from "../../components/Stats/Stats";
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
      showModal: false,
      milestones: buildMilestones(this.props.actions)
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
      milestones: buildMilestones(nextProps.actions)
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
    this.props.setSurvival(this.props.oid, data).catch(() => {
      this.resetData();
    });
  }
  // Pass to Number Increment to update amount
  handleUpdateAmount(amount) {
    this.setState({ amount });
  }
  // Finds what milestone is available
  countAvailableActions() {
    let count = 0;
    this.props.actions.forEach(item => {
      if (!item.title_tip.includes("unlocked")) {
        count += 1;
      }
    });

    return count;
  }
  // Determines the color of the confirm button
  confirmColor() {
    if (this.state.amount === this.props.amount) {
      return "light";
    }
    return "primary";
  }
  // Displays the survivor actions
  renderActions() {
    return this.props.actions.map(action => (
      <span
        className={classNames({
          "is-active": action.available,
          "is-prevented": action.title_tip.includes("prevent")
        })}
        key={action.handle}
      >
        {action.name}
      </span>
    ));
  }
  // Renders our component
  render() {
    return (
      <div className={"widget survivorSurvival"}>
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
              current={this.countAvailableActions()}
              size={this.props.actions.length}
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
              canIncrease={this.props.canIncrease}
              canDecrease={this.props.canDecrease}
            />
            <div className="survivalSkills">{this.renderActions()}</div>
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

Survival.propTypes = {
  amount: PropTypes.number,
  oid: PropTypes.string,
  limit: PropTypes.number,
  canDecrease: PropTypes.bool,
  canIncrease: PropTypes.bool,
  actions: PropTypes.arrayOf(PropTypes.object),
  setSurvival: PropTypes.func
};

Survival.defaultProps = {
  amount: 0,
  limit: 1,
  oid: "",
  canDecrease: true,
  canIncrease: true,
  actions: []
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      setSurvival
    },
    dispatch
  );
}

export default connect(null, mapDispatchToProps)(Survival);
