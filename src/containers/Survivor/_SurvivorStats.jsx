import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  ModalFooter,
  Button,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane
} from "reactstrap";
import NumberIncrement from "../../components/NumberIncrement/NumberIncrement";
import Stat from "../../components/Stats/Stats";
import StatGroup from "../../components/Stats/StatsGroup";
import MilestoneDots from "../../components/MilestoneDots/MilestoneDots";
import WidgetVariant from "../../components/Widget/WidgetVariant";
import { setManyAttributes } from "../../actions/attributes";

/*

  Stat Array
  Attribute Array

*/

class SurvivorStats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleModal: false,
      activeTab: 1,
      title: "Primary Stats",
      movement: this.props.movement,
      accuracy: this.props.accuracy,
      strength: this.props.strength,
      evasion: this.props.evasion,
      luck: this.props.luck,
      speed: this.props.speed,
      movementGear: this.props.movementGear,
      movementTokens: this.props.movementTokens,
      accuracyGear: this.props.accuracyGear,
      strengthGear: this.props.strengthGear,
      evasionGear: this.props.evasionGear,
      luckGear: this.props.luckGear,
      speedGear: this.props.speedGear,
      accuracyTokens: this.props.accuracyTokens,
      strengthTokens: this.props.strengthTokens,
      evasionTokens: this.props.evasionTokens,
      luckTokens: this.props.luckTokens,
      speedTokens: this.props.speedTokens
    };
    // Binding Events
    this.handleTabChange = this.handleTabChange.bind(this);
    this.handleUpdateAmount = this.handleUpdateAmount.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleConfirm = this.handleConfirm.bind(this);
    this.handleModal = this.handleModal.bind(this);
  }
  handleTabChange(tab) {
    this.setState({
      searchName: "",
      activeTab: tab
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
    // TODO: KHOA SAVE THIS SHIT.
    console.warn("Saving Assets for survivor oid", this.props.oid);
    // Call to use with data to pass
    let userId = localStorage.getItem("userId");
    const data = {
      user_id: userId,
      attributes: [
        { attribute: "Strength", value: this.state.strength },
        { attribute: "Movement", value: this.state.movement },
        { attribute: "Accuracy", value: this.state.accuracy },
        { attribute: "Evasion", value: this.state.evasion },
        { attribute: "Luck", value: this.state.luck },
        { attribute: "Speed", value: this.state.speed }
      ]
    };
    console.log(data);
    setManyAttributes(this.props.oid, data).then(res => {
      console.log("OK", res);
      this.handleModal();
    });
  }
  handleUpdateAmount(amount, type) {
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
        <Nav tabs>
          <NavItem>
            <NavLink
              tabIndex="0"
              className={`${this.state.activeTab === 1 ? "active" : ""}`}
              onClick={() => {
                this.handleTabChange(1);
              }}
            >
              Permanent
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              tabIndex="0"
              className={`${this.state.activeTab === 2 ? "active" : ""}`}
              onClick={() => {
                this.handleTabChange(2);
              }}
            >
              Gear
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              tabIndex="0"
              className={`${this.state.activeTab === 3 ? "active" : ""}`}
              onClick={() => {
                this.handleTabChange(3);
              }}
            >
              Tokens
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId={1}>
            <StatGroup>
              <NumberIncrement
                name={"Movement"}
                min={1}
                amount={this.state.movement}
                updateAmount={amount =>
                  this.handleUpdateAmount(amount, "movement")}
              />
              <NumberIncrement
                name={"Accuracy"}
                amount={this.state.accuracy}
                updateAmount={amount =>
                  this.handleUpdateAmount(amount, "accuracy")}
              />
              <NumberIncrement
                name={"Strength"}
                amount={this.state.strength}
                updateAmount={amount =>
                  this.handleUpdateAmount(amount, "strength")}
              />
              <NumberIncrement
                name={"Evasion"}
                amount={this.state.evasion}
                updateAmount={amount =>
                  this.handleUpdateAmount(amount, "evasion")}
              />
              <NumberIncrement
                name={"Luck"}
                amount={this.state.luck}
                updateAmount={amount => this.handleUpdateAmount(amount, "luck")}
              />
              <NumberIncrement
                name={"Speed"}
                min={1}
                amount={this.state.speed}
                updateAmount={amount =>
                  this.handleUpdateAmount(amount, "speed")}
              />
            </StatGroup>
          </TabPane>
          <TabPane tabId={2}>
            <StatGroup>
              <NumberIncrement
                name={"Movement"}
                amount={this.state.movementGear}
                updateAmount={amount =>
                  this.handleUpdateAmount(amount, "movementGear")}
              />
              <NumberIncrement
                name={"Accuracy"}
                amount={this.state.accuracyGear}
                updateAmount={amount =>
                  this.handleUpdateAmount(amount, "accuracyGear")}
              />
              <NumberIncrement
                name={"Strength"}
                amount={this.state.strengthGear}
                updateAmount={amount =>
                  this.handleUpdateAmount(amount, "strengthGear")}
              />
              <NumberIncrement
                name={"Evasion"}
                amount={this.state.evasionGear}
                updateAmount={amount =>
                  this.handleUpdateAmount(amount, "evasionGear")}
              />
              <NumberIncrement
                name={"Luck"}
                amount={this.state.luckGear}
                updateAmount={amount =>
                  this.handleUpdateAmount(amount, "luckGear")}
              />
              <NumberIncrement
                name={"Speed"}
                amount={this.state.speedGear}
                updateAmount={amount =>
                  this.handleUpdateAmount(amount, "speedGear")}
              />
            </StatGroup>
          </TabPane>
          <TabPane tabId={3}>
            <StatGroup>
              <NumberIncrement
                name={"Movement"}
                amount={this.state.movementTokens}
                updateAmount={amount =>
                  this.handleUpdateAmount(amount, "movementTokens")}
              />
              <NumberIncrement
                name={"Accuracy"}
                amount={this.state.accuracyTokens}
                updateAmount={amount =>
                  this.handleUpdateAmount(amount, "accuracyTokens")}
              />
              <NumberIncrement
                name={"Strength"}
                amount={this.state.strengthTokens}
                updateAmount={amount =>
                  this.handleUpdateAmount(amount, "strengthTokens")}
              />
              <NumberIncrement
                name={"Evasion"}
                amount={this.state.evasionTokens}
                updateAmount={amount =>
                  this.handleUpdateAmount(amount, "evasionTokens")}
              />
              <NumberIncrement
                name={"Luck"}
                amount={this.state.luckTokens}
                updateAmount={amount =>
                  this.handleUpdateAmount(amount, "luckTokens")}
              />
              <NumberIncrement
                name={"Speed"}
                amount={this.state.speedTokens}
                updateAmount={amount =>
                  this.handleUpdateAmount(amount, "speedGear")}
              />
            </StatGroup>
          </TabPane>
        </TabContent>
      </div>
    );
  }
  // renderModifiers(type) {
  //   return this.state.order.map(stat => {
  //     if (this.props.modifiers[stat]) {
  //       const amount = this.props.modifiers[stat][type];
  //       return
  //       <NumberIncrement
  //       key={`${stat}${type}`} name={stat}
  //         amount={amount}
  //         updateAmount={this.updateAmount.bind(this, "movement")}
  //       />
  //       <Stat key={`${stat}${type}`} name={stat} amount={amount} />;
  //     }
  //     return null;
  //     // <Stat name={"Mov"} amount={this.props.movement} />
  //   });
  // }
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
  renderStats() {
    return (
      <StatGroup>
        <Stat name={"Mov"} amount={this.props.movement} />
        <Stat name={"Acc"} amount={this.props.accuracy} />
        <Stat name={"Str"} amount={this.props.strength} />
        <Stat name={"Eva"} amount={this.props.evasion} />
        <Stat name={"Luck"} amount={this.props.luck} />
        <Stat name={"Spd"} amount={this.props.speed} />
      </StatGroup>
    );
  }
  render() {
    return (
      <WidgetVariant
        title={this.state.title}
        toggleModal={this.state.toggleModal}
        myClass={"survivorStats"}
        center
      >
        {/* We use this.props so we only show the saved value */}
        {this.renderStats()}
        {this.renderModalBody()}
        {this.renderModalFooter()}
      </WidgetVariant>
    );
  }
}

SurvivorStats.propTypes = {
  amount: PropTypes.number,
  oid: PropTypes.string,
  movement: PropTypes.number,
  accuracy: PropTypes.number,
  strength: PropTypes.number,
  evasion: PropTypes.number,
  luck: PropTypes.number,
  speed: PropTypes.number,
  movementGear: PropTypes.number,
  movementTokens: PropTypes.number,
  accuracyGear: PropTypes.number,
  strengthGear: PropTypes.number,
  evasionGear: PropTypes.number,
  luckGear: PropTypes.number,
  speedGear: PropTypes.number,
  accuracyTokens: PropTypes.number,
  strengthTokens: PropTypes.number,
  evasionTokens: PropTypes.number,
  luckTokens: PropTypes.number,
  speedTokens: PropTypes.number
};

SurvivorStats.defaultProps = {
  amount: 0,
  oid: "",
  movement: 5,
  accuracy: 0,
  strength: 0,
  evasion: 0,
  luck: 0,
  speed: 0,
  movementGear: 0,
  movementTokens: 0,
  accuracyGear: 0,
  strengthGear: 0,
  evasionGear: 0,
  luckGear: 0,
  speedGear: 0,
  accuracyTokens: 0,
  strengthTokens: 0,
  evasionTokens: 0,
  luckTokens: 0,
  speedTokens: 0
};

export default SurvivorStats;
