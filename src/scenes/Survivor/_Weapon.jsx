import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import { Modal, ModalBody, ModalHeader, ModalFooter, Button } from "reactstrap";
import { setAttributes, setProficiency } from "../../actions/attributes";
import NumberIncrement from "../../components/NumberIncrement/NumberIncrement";
import Stat from "../../components/Stats/Stats";
import MilestoneDots from "../../components/MilestoneDots/MilestoneDots";

class Weapon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      title: "Weapon",
      type: props.type,
      amount: props.amount
    };
    // Binding Events
    this.handleTypeSelect = this.handleTypeSelect.bind(this);
    this.handleModalToggle = this.handleModalToggle.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleModalConfirm = this.handleModalConfirm.bind(this);
    this.handleUpdateAmount = this.handleUpdateAmount.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      type: nextProps.type,
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
      attribute: "Weapon Proficiency",
      value: this.state.amount
    };
    const proficiencyType = {
      user_id: userId,
      handle: this.state.type
    };
    if (this.state.type === "") {
      proficiencyType.unset = true;
    }
    this.handleModalToggle();
    Promise.all([
      this.props.setAttributes(this.props.oid, data),
      this.props.setProficiency(this.props.oid, proficiencyType)
    ]).catch(err => {
      alert("Sorry an error has occurred. Please refresh the page.", err);
    });
  }
  // Pass to Number Increment to update amount
  handleUpdateAmount(amount) {
    this.setState({ amount });
  }
  handleTypeSelect(event) {
    const handle = event.target.value;
    this.setState({
      type: handle
    });
  }
  // Determines the color of the confirm button
  confirmColor() {
    if (
      this.state.amount === this.props.amount &&
      this.state.type === this.props.type
    ) {
      return "light";
    }
    return "primary";
  }
  renderList() {
    if (this.props.apiList.length !== 0) {
      return this.props.apiList.map(i => (
        <option value={i.handle} key={i.handle}>
          {i.name}
        </option>
      ));
    }
    return null;
  }
  renderStatAttribute() {
    if (this.state.type) {
      const asset = this.props.apiList.find(i => i.handle === this.state.type);
      return <div className="statAttribute">{asset.name}</div>;
    }
    return null;
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
            <div className="text-center mt-4">
              <select onChange={this.handleTypeSelect} value={this.state.type}>
                <option value="">Choose Your Proficiency</option>
                {this.renderList()}
              </select>
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

Weapon.propTypes = {
  amount: PropTypes.number,
  type: PropTypes.string,
  oid: PropTypes.string,
  limit: PropTypes.number,
  apiList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      handle: PropTypes.string
    })
  ),
  milestones: PropTypes.arrayOf(
    PropTypes.shape({
      handle: PropTypes.string,
      values: PropTypes.arrayOf(PropTypes.number)
    })
  ),
  setAttributes: PropTypes.func,
  setProficiency: PropTypes.func
};

Weapon.defaultProps = {
  amount: 0,
  type: "",
  oid: "",
  limit: 1,
  apiList: [],
  milestones: []
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      setAttributes,
      setProficiency
    },
    dispatch
  );
}

export default connect(null, mapDispatchToProps)(Weapon);
