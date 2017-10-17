import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Row,
  Col,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Button
} from "reactstrap";
import classNames from "classnames";
import Stats from "../../components/Stats/Stats";
import Milestone from "../../components/Milestone/Milestone";
import MilestoneDots from "../../components/MilestoneDots/MilestoneDots";
import NumberIncrement from "../../components/NumberIncrement/NumberIncrement";

class SurvivorArmor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      title: "Adjust Armor",
      insanity: props.insanity,
      head: props.head,
      arms: props.arms,
      body: props.body,
      waist: props.waist,
      legs: props.legs,
      min: -2,
      max: 10
    };
    this.handleModal = this.handleModal.bind(this);
    this.handleConfirm = this.handleConfirm.bind(this);
  }

  handleModal() {
    this.setState({
      showModal: !this.state.showModal
    });
  }
  handleConfirm() {
    // dispatches data to api to save
    this.setState({
      showModal: false
    });
  }
  updateAmount(type, amount) {
    this.setState({
      [type]: amount
    });
  }
  renderConfirm() {
    if (this.state.amount == this.props.amount) {
      return (
        <Button color="light" onClick={this.handleConfirm}>
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
      <div className="box survivorArmor">
        <header className="box-header">
          <div className="box-header-title">{this.state.title}</div>
        </header>
        <button
          onClick={this.handleModal}
          type="button"
          className="box-content"
        >
          <div className="statGroup">
            <Stats name={"Brain"} amount={this.state.insanity} />
            <Stats name={"Head"} amount={this.state.head} />
            <Stats name={"Arms"} amount={this.state.arms} />
            <Stats name={"Body"} amount={this.state.body} />
            <Stats name={"Waist"} amount={this.state.waist} />
            <Stats name={"Legs"} amount={this.state.legs} />
          </div>
        </button>
        <Modal isOpen={this.state.showModal} toggle={this.handleModal}>
          <ModalHeader>Adjust {this.state.title}</ModalHeader>
          <ModalBody>
            <NumberIncrement
              type="armor"
              name={"Insanity"}
              amount={this.state.insanity}
              min={this.state.min}
              max={this.state.max}
              updateAmount={this.updateAmount.bind(this, "insanity")}
            />
            <NumberIncrement
              type="armor"
              name={"Head"}
              amount={this.state.head}
              min={this.state.min}
              max={this.state.max}
              updateAmount={this.updateAmount.bind(this, "head")}
            />
            <NumberIncrement
              type="armor"
              name={"Arms"}
              amount={this.state.arms}
              min={this.state.min}
              max={this.state.max}
              updateAmount={this.updateAmount.bind(this, "arms")}
            />
            <NumberIncrement
              type="armor"
              name={"Body"}
              amount={this.state.body}
              min={this.state.min}
              max={this.state.max}
              updateAmount={this.updateAmount.bind(this, "body")}
            />
            <NumberIncrement
              type="armor"
              name={"Waist"}
              amount={this.state.waist}
              min={this.state.min}
              max={this.state.max}
              updateAmount={this.updateAmount.bind(this, "waist")}
            />
            <NumberIncrement
              type="armor"
              name={"Legs"}
              amount={this.state.legs}
              min={this.state.min}
              max={this.state.max}
              updateAmount={this.updateAmount.bind(this, "legs")}
            />
          </ModalBody>
          <ModalFooter>
            {this.renderConfirm()}
            <Button color="link" onClick={this.handleModal}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

SurvivorArmor.defaultProps = {
  insanity: 5,
  head: 0,
  arms: 0,
  body: 0,
  waist: 0,
  speed: 0
};

SurvivorArmor.propTypes = {
  insanity: PropTypes.number,
  head: PropTypes.number,
  arms: PropTypes.number,
  body: PropTypes.number,
  waist: PropTypes.number,
  legs: PropTypes.number
};

export default SurvivorArmor;
