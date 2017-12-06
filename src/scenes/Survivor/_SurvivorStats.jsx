import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Button,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane
} from "reactstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import _isEqual from "lodash/isEqual";
import NumberIncrement from "../../components/NumberIncrement/NumberIncrement";
import Stat from "../../components/Stats/Stats";
import StatGroup from "../../components/Stats/StatsGroup";
import { setManyAttributes } from "../../actions/attributes";

class SurvivorStats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      activeTab: 1,
      title: "Stats",
      movement: {
        stat: props.movement.stat,
        token: props.movement.token,
        gear: props.movement.gear
      },
      accuracy: {
        stat: props.accuracy.stat,
        token: props.accuracy.token,
        gear: props.accuracy.gear
      },
      strength: {
        stat: props.strength.stat,
        token: props.strength.token,
        gear: props.strength.gear
      },
      evasion: {
        stat: props.evasion.stat,
        token: props.evasion.token,
        gear: props.evasion.gear
      },
      luck: {
        stat: props.luck.stat,
        token: props.luck.token,
        gear: props.luck.gear
      },
      speed: {
        stat: props.speed.stat,
        token: props.speed.token,
        gear: props.speed.gear
      }
    };
    // Binding Events
    this.handleTabChange = this.handleTabChange.bind(this);
    this.handleUpdateAmount = this.handleUpdateAmount.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleModalConfirm = this.handleModalConfirm.bind(this);
    this.handleModalToggle = this.handleModalToggle.bind(this);
  }
  getTotal(attribute) {
    const stat = this.state[attribute];
    return stat.stat + stat.token + stat.gear;
  }
  handleTabChange(tab) {
    this.setState({
      searchName: "",
      activeTab: tab
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
    // console.log(this.props.values);
    this.setState({
      movement: this.props.movement,
      accuracy: this.props.accuracy,
      strength: this.props.strength,
      evasion: this.props.evasion,
      luck: this.props.luck,
      speed: this.props.speed
    });
  }
  // Cancel event from the modal, reset the state.
  handleCancel() {
    this.handleModalToggle();
    this.resetData();
  }
  // Handle's the save and makes the API Call
  handleModalConfirm() {
    // Call to use with data to pass
    const userId = localStorage.getItem("userId");
    const data = {
      user_id: userId,
      attributes: [
        { attribute: "Strength", value: this.state.strength.stat },
        { attribute: "Movement", value: this.state.movement.stat },
        { attribute: "Accuracy", value: this.state.accuracy.stat },
        { attribute: "Evasion", value: this.state.evasion.stat },
        { attribute: "Luck", value: this.state.luck.stat },
        { attribute: "Speed", value: this.state.speed.stat }
      ],
      attribute_details: [
        {
          attribute: "Strength",
          detail: "tokens",
          value: this.state.strength.token
        },
        {
          attribute: "Movement",
          detail: "tokens",
          value: this.state.movement.token
        },
        {
          attribute: "Accuracy",
          detail: "tokens",
          value: this.state.accuracy.token
        },
        {
          attribute: "Evasion",
          detail: "tokens",
          value: this.state.evasion.token
        },
        { attribute: "Luck", detail: "tokens", value: this.state.luck.token },
        { attribute: "Speed", detail: "tokens", value: this.state.speed.token },
        {
          attribute: "Strength",
          detail: "gear",
          value: this.state.strength.gear
        },
        {
          attribute: "Movement",
          detail: "gear",
          value: this.state.movement.gear
        },
        {
          attribute: "Accuracy",
          detail: "gear",
          value: this.state.accuracy.gear
        },
        {
          attribute: "Evasion",
          detail: "gear",
          value: this.state.evasion.gear
        },
        { attribute: "Luck", detail: "gear", value: this.state.luck.gear },
        { attribute: "Speed", detail: "gear", value: this.state.speed.gear }
      ]
    };
    this.props.setManyAttributes(this.props.oid, data);
    this.handleModalToggle();
  }
  handleUpdateAmount(amount, attribute, type) {
    const value = this.state[attribute];
    value[type] = amount;
    this.forceUpdate();
  }
  // Determines the color of the confirm button
  confirmColor() {
    if (
      _isEqual(this.props.movement, this.state.movement) &&
      _isEqual(this.props.accuracy, this.state.accuracy) &&
      _isEqual(this.props.strength, this.state.strength) &&
      _isEqual(this.props.evasion, this.state.evasion) &&
      _isEqual(this.props.luck, this.state.luck) &&
      _isEqual(this.props.speed, this.state.speed)
    ) {
      return "light";
    }
    return "primary";
  }
  renderStatIcon(number, type) {
    if (number > 0) {
      return <div className={`statIcon statIcon--${type}`} />;
    }
    return null;
  }
  renderStat(name, attribute) {
    const stat = this.state[attribute];
    const total = stat.stat + stat.token + stat.gear;
    return (
      <Stat name={name} amount={total}>
        {this.renderStatIcon(stat.token, "token")}
        {this.renderStatIcon(stat.gear, "gear")}
      </Stat>
    );
  }
  // Renders our component
  render() {
    return (
      <div className={"widget survivorStats"}>
        <header className={"widget-header widget-header--link"}>
          <div className="widget-header-title">{this.state.title}</div>
        </header>
        <button
          type="button"
          className="widget-content"
          onClick={this.handleModalToggle}
        >
          <StatGroup>
            {this.renderStat("Mov", "movement")}
            {this.renderStat("Acc", "accuracy")}
            {this.renderStat("Str", "strength")}
            {this.renderStat("Eva", "evasion")}
            {this.renderStat("Luck", "luck")}
            {this.renderStat("Spd", "speed")}
          </StatGroup>
        </button>
        <Modal isOpen={this.state.showModal} toggle={this.handleCancel}>
          <ModalHeader>Adjust {this.state.title}</ModalHeader>
          <ModalBody>
            <Nav tabs className="nav--gray">
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
                <div className="numberIncrementGroup">
                  <NumberIncrement
                    name={"Movement"}
                    min={1}
                    amount={this.state.movement.stat}
                    updateAmount={amount =>
                      this.handleUpdateAmount(amount, "movement", "stat")}
                  />
                  <NumberIncrement
                    name={"Accuracy"}
                    amount={this.state.accuracy.stat}
                    updateAmount={amount =>
                      this.handleUpdateAmount(amount, "accuracy", "stat")}
                  />
                  <NumberIncrement
                    name={"Strength"}
                    amount={this.state.strength.stat}
                    updateAmount={amount =>
                      this.handleUpdateAmount(amount, "strength", "stat")}
                  />
                  <NumberIncrement
                    name={"Evasion"}
                    amount={this.state.evasion.stat}
                    updateAmount={amount =>
                      this.handleUpdateAmount(amount, "evasion", "stat")}
                  />
                  <NumberIncrement
                    name={"Luck"}
                    amount={this.state.luck.stat}
                    updateAmount={amount =>
                      this.handleUpdateAmount(amount, "luck", "stat")}
                  />
                  <NumberIncrement
                    name={"Speed"}
                    amount={this.state.speed.stat}
                    updateAmount={amount =>
                      this.handleUpdateAmount(amount, "speed", "stat")}
                  />
                </div>
              </TabPane>
              <TabPane tabId={2}>
                <div className="numberIncrementGroup">
                  <NumberIncrement
                    name={"Movement"}
                    amount={this.state.movement.gear}
                    updateAmount={amount =>
                      this.handleUpdateAmount(amount, "movement", "gear")}
                  />
                  <NumberIncrement
                    name={"Accuracy"}
                    amount={this.state.accuracy.gear}
                    updateAmount={amount =>
                      this.handleUpdateAmount(amount, "accuracy", "gear")}
                  />
                  <NumberIncrement
                    name={"Strength"}
                    amount={this.state.strength.gear}
                    updateAmount={amount =>
                      this.handleUpdateAmount(amount, "strength", "gear")}
                  />
                  <NumberIncrement
                    name={"Evasion"}
                    amount={this.state.evasion.gear}
                    updateAmount={amount =>
                      this.handleUpdateAmount(amount, "evasion", "gear")}
                  />
                  <NumberIncrement
                    name={"Luck"}
                    amount={this.state.luck.gear}
                    updateAmount={amount =>
                      this.handleUpdateAmount(amount, "luck", "gear")}
                  />
                  <NumberIncrement
                    name={"Speed"}
                    amount={this.state.speed.gear}
                    updateAmount={amount =>
                      this.handleUpdateAmount(amount, "speed", "gear")}
                  />
                </div>
              </TabPane>
              <TabPane tabId={3}>
                <div className="numberIncrementGroup">
                  <NumberIncrement
                    name={"Movement"}
                    amount={this.state.movement.token}
                    updateAmount={amount =>
                      this.handleUpdateAmount(amount, "movement", "token")}
                  />
                  <NumberIncrement
                    name={"Accuracy"}
                    amount={this.state.accuracy.token}
                    updateAmount={amount =>
                      this.handleUpdateAmount(amount, "accuracy", "token")}
                  />
                  <NumberIncrement
                    name={"Strength"}
                    amount={this.state.strength.token}
                    updateAmount={amount =>
                      this.handleUpdateAmount(amount, "strength", "token")}
                  />
                  <NumberIncrement
                    name={"Evasion"}
                    amount={this.state.evasion.token}
                    updateAmount={amount =>
                      this.handleUpdateAmount(amount, "evasion", "token")}
                  />
                  <NumberIncrement
                    name={"Luck"}
                    amount={this.state.luck.token}
                    updateAmount={amount =>
                      this.handleUpdateAmount(amount, "luck", "token")}
                  />
                  <NumberIncrement
                    name={"Speed"}
                    amount={this.state.speed.token}
                    updateAmount={amount =>
                      this.handleUpdateAmount(amount, "speed", "token")}
                  />
                </div>
              </TabPane>
            </TabContent>
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

SurvivorStats.propTypes = {
  setManyAttributes: PropTypes.func.isRequired,
  oid: PropTypes.string.isRequired,
  movement: PropTypes.shape({
    stat: PropTypes.number,
    token: PropTypes.number,
    gear: PropTypes.number
  }).isRequired,
  accuracy: PropTypes.shape({
    stat: PropTypes.number,
    token: PropTypes.number,
    gear: PropTypes.number
  }).isRequired,
  strength: PropTypes.shape({
    stat: PropTypes.number,
    token: PropTypes.number,
    gear: PropTypes.number
  }).isRequired,
  evasion: PropTypes.shape({
    stat: PropTypes.number,
    token: PropTypes.number,
    gear: PropTypes.number
  }).isRequired,
  luck: PropTypes.shape({
    stat: PropTypes.number,
    token: PropTypes.number,
    gear: PropTypes.number
  }).isRequired,
  speed: PropTypes.shape({
    stat: PropTypes.number,
    token: PropTypes.number,
    gear: PropTypes.number
  }).isRequired
};

SurvivorStats.defaultProps = {
  oid: "",
  movement: PropTypes.shape({
    stat: 0,
    token: 0,
    gear: 0
  }),
  accuracy: PropTypes.shape({
    stat: 0,
    token: 0,
    gear: 0
  }),
  strength: PropTypes.shape({
    stat: 0,
    token: 0,
    gear: 0
  }),
  evasion: PropTypes.shape({
    stat: 0,
    token: 0,
    gear: 0
  }),
  luck: PropTypes.shape({
    stat: 0,
    token: 0,
    gear: 0
  }),
  speed: PropTypes.shape({
    stat: 0,
    token: 0,
    gear: 0
  })
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      setManyAttributes
    },
    dispatch
  );
}

export default connect(null, mapDispatchToProps)(SurvivorStats);
