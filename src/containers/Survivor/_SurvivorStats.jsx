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
      order: ["Movement", "Accuracy", "Strength", "Evasion", "Luck", "Speed"]
    };
    // Binding Events
    this.handleTabChange = this.handleTabChange.bind(this);
    this.updateAmount = this.updateAmount.bind(this);
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
    console.warn("Saving Bleeding for survivor oid", this.props.oid);
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
            <div className="layout">Permanent</div>
          </TabPane>
          <TabPane tabId={2}>
            <StatGroup>{this.renderModifiers("gear")}</StatGroup>
          </TabPane>
          <TabPane tabId={3}>
            <div className="layout">{this.renderModifiers("tokens")}</div>
          </TabPane>
        </TabContent>
      </div>
    );
  }
  renderModifiers(type) {
    return this.state.order.map(stat => {
      if (this.props.modifiers[stat]) {
        const amount = this.props.modifiers[stat][type];
        return <Stat key={`${stat}${type}`} name={stat} amount={amount} />;
      }
      return null;
      // <Stat name={"Mov"} amount={this.props.movement} />
    });
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
  // modifiers: PropTypes.shape,
  limit: PropTypes.number
};

SurvivorStats.defaultProps = {
  amount: 0,
  limit: 5,
  oid: ""
};

export default SurvivorStats;
