import React, { Component } from "react";
import PropTypes from "prop-types";
import { Modal, ModalBody, ModalHeader, ModalFooter, Button } from "reactstrap";
import _isEqual from "lodash/isEqual";
import NumberIncrement from "../../components/NumberIncrement/NumberIncrement";
import Stat from "../../components/Stats/Stats";
import StatGroup from "../../components/Stats/StatsGroup";
import MilestoneDots from "../../components/MilestoneDots/MilestoneDots";
import WidgetVariant from "../../components/Widget/WidgetVariant";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setManyArmor } from "../../actions/attributes";

class Armor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      title: "Armor",
      values: {
        brain: props.values.brain,
        head: props.values.head,
        arms: props.values.arms,
        body: props.values.body,
        waist: props.values.waist,
        legs: props.values.legs
      },
      mask: {
        "-1": "L",
        "-2": "H"
      },
      min: -2
    };
    // Binding Events
    this.handleModalToggle = this.handleModalToggle.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleModalConfirm = this.handleModalConfirm.bind(this);
    this.handleUpdateAmount = this.handleUpdateAmount.bind(this);
  }
  // Toggles the visibility of the modal
  handleModalToggle() {
    this.setState({
      showModal: !this.state.showModal
    });
  }
  // Resets our data
  resetData() {
    console.log(this.props.values);
    this.setState({
      values: this.props.values
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
      attributes: [
        { attribute: "Insanity", value: this.state.values.brain },
        { attribute: "Head", value: this.state.values.head },
        { attribute: "Arms", value: this.state.values.arms },
        { attribute: "Body", value: this.state.values.body },
        { attribute: "Waist", value: this.state.values.waist },
        { attribute: "Legs", value: this.state.values.legs }
      ]
    };
    this.handleModalToggle();
    this.props.setManyArmor(this.props.oid, data).catch(() => {
      this.resetData();
    });
  }
  // Function to pass to Number Increment
  handleUpdateAmount(amount, type) {
    const values = this.state.values;
    values[type] = amount;
    this.forceUpdate();
  }
  // Determines the color of the confirm button
  confirmColor() {
    if (_isEqual(this.state.values, this.props.values)) {
      return "light";
    }
    return "primary";
  }
  // Renders our component
  render() {
    return (
      <div className={"widget survivorArmor"}>
        <header className={"widget-header widget-header--link"}>
          <div className="widget-header-title">{this.state.title}</div>
        </header>
        <button
          type="button"
          className="widget-content"
          onClick={this.handleModalToggle}
        >
          <StatGroup>
            <Stat
              name={"Brain"}
              mask={this.state.mask}
              amount={this.state.values.brain}
            />
            <Stat
              name={"Head"}
              mask={{ "-1": "H" }}
              amount={this.state.values.head}
            />
            <Stat
              name={"Arms"}
              mask={this.state.mask}
              amount={this.state.values.arms}
            />
            <Stat
              name={"Body"}
              mask={this.state.mask}
              amount={this.state.values.body}
            />
            <Stat
              name={"Waist"}
              mask={this.state.mask}
              amount={this.state.values.waist}
            />
            <Stat
              name={"Legs"}
              mask={this.state.mask}
              amount={this.state.values.legs}
            />
          </StatGroup>
        </button>
        <Modal isOpen={this.state.showModal} toggle={this.handleCancel}>
          <ModalHeader>Adjust {this.state.title}</ModalHeader>
          <ModalBody>
            <div className="numberIncrementGroup">
              <NumberIncrement
                type="armor"
                name={"Brain"}
                amount={this.state.values.brain}
                min={-1}
                mask={this.state.mask}
                updateAmount={amount =>
                  this.handleUpdateAmount(amount, "brain")}
              />
              <NumberIncrement
                type="armor"
                name={"Head"}
                amount={this.state.values.head}
                min={-1}
                mask={{ "-1": "H" }}
                updateAmount={amount => this.handleUpdateAmount(amount, "head")}
              />
              <NumberIncrement
                type="armor"
                name={"Arms"}
                amount={this.state.values.arms}
                min={this.state.min}
                mask={this.state.mask}
                updateAmount={amount => this.handleUpdateAmount(amount, "arms")}
              />
              <NumberIncrement
                type="armor"
                name={"Body"}
                amount={this.state.values.body}
                min={this.state.min}
                mask={this.state.mask}
                updateAmount={amount => this.handleUpdateAmount(amount, "body")}
              />
              <NumberIncrement
                type="armor"
                name={"Waist"}
                amount={this.state.values.waist}
                min={this.state.min}
                mask={this.state.mask}
                updateAmount={amount =>
                  this.handleUpdateAmount(amount, "waist")}
              />
              <NumberIncrement
                type="armor"
                name={"Legs"}
                amount={this.state.values.legs}
                min={this.state.min}
                mask={this.state.mask}
                updateAmount={amount => this.handleUpdateAmount(amount, "legs")}
              />
            </div>
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

Armor.defaultProps = {
  values: {
    brain: 0,
    head: 0,
    arms: 0,
    body: 0,
    waist: 0,
    legs: 0
  }
};

Armor.propTypes = {
  setManyArmor: PropTypes.func.isRequired,
  oid: PropTypes.string.isRequired,
  values: PropTypes.shape({
    brain: PropTypes.number,
    head: PropTypes.number,
    arms: PropTypes.number,
    body: PropTypes.number,
    waist: PropTypes.number,
    legs: PropTypes.number
  }).isRequired
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      setManyArmor
    },
    dispatch
  );
}

export default connect(null, mapDispatchToProps)(Armor);
