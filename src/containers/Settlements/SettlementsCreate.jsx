import React from "react";
import {
  Button,
  Input,
  FormGroup,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane
} from "reactstrap";
import { Link } from "react-router";
import classnames from "classnames";
import Header from "../../components/Header/Header";
import Icon from "../../components/Icon/Icon";
import Toggle from "../../components/Toggle/Toggle";
import Widget from "../../components/Widget/Widget";
import WidgetFooter from "../../components/Widget/WidgetFooter";
import { createSettlement } from "../../actions/getSettlement.js";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class Settlements extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleExpansion = this.toggleExpansion.bind(this);
    this.randomSettlement = this.randomSettlement.bind(this);
    this.state = {
      activeTab: 1,
      name: "",
      campaign: "People of the Lantern"
    };
  }
  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  toggleExpansion(bool, type) {
    console.warn("update toggle", type);
  }
  randomSettlement() {
    const names = ["Petra", "Palenque", "Teotihuacan", "Tiwanaku", "Timgad"];
    const random = names[Math.floor(Math.random() * names.length)];
    this.setState({
      name: random
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    if (this.state.activeTab < 4) {
      this.setState({
        activeTab: this.state.activeTab + 1
      });
    }
  }
  handleCreate(e) {
    e.preventDefault();
    let userId = localStorage.getItem("userId");

    let data = {
      user_id: userId,
      campaign: this.state.campaign
    };
    console.warn("KHOA CREATE SETTLEMENT!");
    this.props.createSettlement(data);
  }
  renderCreate() {
    // TODO: This needs to be changed to see if the data is filled out, NOT last tab
    const active = this.state.activeTab === 4;
    if (active) {
      return (
        // @Khoa - th
        <Link
          to={"/campaigns"}
          onClick={this.handleCreate}
          className="header-action"
        >
          <Icon name={"check"} color="yellow" />
        </Link>
      );
    }
    return (
      <span className="header-action">
        <Icon name={"check"} />
      </span>
    );
  }
  render() {
    return (
      <div>
        <Header name={"Create New Campaign"} showBack>
          {this.renderCreate()}
        </Header>
        <div className="layoutContent">
          <Nav tabs>
            <NavItem>
              <NavLink
                tabIndex="0"
                className={classnames({ active: this.state.activeTab === 1 })}
                onClick={() => {
                  this.toggle(1);
                }}
              >
                Name
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                tabIndex="0"
                className={classnames({ active: this.state.activeTab === 2 })}
                onClick={() => {
                  this.toggle(2);
                }}
              >
                Campaign
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                tabIndex="0"
                className={classnames({ active: this.state.activeTab === 3 })}
                onClick={() => {
                  this.toggle(3);
                }}
              >
                Expansions
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                tabIndex="0"
                className={classnames({ active: this.state.activeTab === 4 })}
                onClick={() => {
                  this.toggle(4);
                }}
              >
                Survivors
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId={1}>
              <form onSubmit={this.handleSubmit}>
                <legend>Name the Settlement</legend>
                <Widget>
                  {/* @Khoa bind the value to state.name correctly */}
                  <Input
                    type="text"
                    name="name"
                    placeholder="Enter settlement name..."
                    size="sm"
                    value={this.state.name}
                    autoFocus
                    required
                  />
                  <WidgetFooter>
                    <Button
                      color="gray"
                      size="sm"
                      type="button"
                      onClick={this.randomSettlement}
                    >
                      Randomize Name
                    </Button>
                    <Button color="primary" size="sm" type="submit">
                      Confirm
                    </Button>
                  </WidgetFooter>
                </Widget>
              </form>
            </TabPane>
            <TabPane tabId={2}>
              <form onSubmit={this.handleSubmit}>
                <legend>Select Campaign</legend>
                <Widget>
                  <FormGroup>
                    <Input
                      type="select"
                      name="selectMulti"
                      id="exampleSelectMulti"
                      size="sm"
                    >
                      <option defaultValue>People of the Lantern</option>
                      <option>People of the Stars</option>
                      <option>People of the Sun</option>
                      <option>The Bloom People</option>
                    </Input>
                  </FormGroup>
                  <WidgetFooter>
                    <Button color="primary" size="sm" type="submit">
                      Confirm
                    </Button>
                  </WidgetFooter>
                </Widget>
              </form>
            </TabPane>
            <TabPane tabId={3}>
              <form onSubmit={this.handleSubmit}>
                <legend>Select Expansions</legend>
                <Widget>
                  <div>
                    <h4>Quarry</h4>
                    <Toggle
                      updateToggle={this.toggleExpansion}
                      for="exp_gorm"
                      active
                      label="Gorm"
                    />
                    <Toggle
                      updateToggle={this.toggleExpansion}
                      for="exp_spidicules"
                      active
                      label="Spidicules"
                    />
                    <Toggle
                      updateToggle={this.toggleExpansion}
                      for="exp_dbk"
                      active
                      label="Dung Beetle Knight"
                    />
                    <Toggle
                      updateToggle={this.toggleExpansion}
                      for="exp_sunstalker"
                      active
                      label="Sunstalker"
                    />
                    <Toggle
                      updateToggle={this.toggleExpansion}
                      for="exp_lion_god"
                      active
                      label="Lion God"
                    />
                    <h4 className="mt-4">Nemisis</h4>
                    <Toggle label="Manhunter" />
                    <Toggle label="Lion Knight" />
                    <Toggle label="Slenderman" />
                    <h4 className="mt-4">Enhancement</h4>
                    <Toggle label="Lonely Tree" />
                    <Toggle label="Green Knight Armor" />
                    <Toggle label="Allison the Twilight Knight" />
                    <Toggle label="Before the Wall" />
                    <Toggle label="Beyond the Wall" />
                    <Toggle label="White Speaker" />
                  </div>
                  <WidgetFooter>
                    <Button color="primary" size="sm" type="submit">
                      Confirm
                    </Button>
                  </WidgetFooter>
                </Widget>
              </form>
            </TabPane>
            <TabPane tabId={4}>
              <form onSubmit={this.handleSubmit}>
                <legend>Create Starting Survivors</legend>
                <Widget>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Enter survivor name..."
                    size="sm"
                    autoFocus
                    required
                  />
                  <WidgetFooter>
                    <Button color="gray" size="sm">
                      Randomize Name
                    </Button>
                    <Input type="select" size="sm">
                      <option defaultValue>Female</option>
                      <option>Male</option>
                    </Input>
                  </WidgetFooter>
                </Widget>
                <Widget>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Enter survivor name..."
                    size="sm"
                    autoFocus
                    required
                  />
                  <WidgetFooter>
                    <Button color="gray" size="sm">
                      Randomize Name
                    </Button>
                    <Input type="select" size="sm">
                      <option defaultValue>Female</option>
                      <option>Male</option>
                    </Input>
                  </WidgetFooter>
                </Widget>
                <Widget>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Enter survivor name..."
                    size="sm"
                    autoFocus
                    required
                  />
                  <WidgetFooter>
                    <Button color="gray" size="sm">
                      Randomize Name
                    </Button>
                    <Input type="select" size="sm">
                      <option defaultValue>Female</option>
                      <option>Male</option>
                    </Input>
                  </WidgetFooter>
                </Widget>
                <Widget>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Enter survivor name..."
                    size="sm"
                    autoFocus
                    required
                  />
                  <WidgetFooter>
                    <Button color="gray" size="sm">
                      Randomize Name
                    </Button>
                    <Input type="select" size="sm">
                      <option defaultValue>Female</option>
                      <option>Male</option>
                    </Input>
                  </WidgetFooter>
                </Widget>
              </form>
            </TabPane>
          </TabContent>
        </div>
      </div>
    );
  }
}

// function mapStateToProps(state) {
//   return { homeData: state.homeData };
// }

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      createSettlement: createSettlement
    },
    dispatch
  );
}

export default connect(null, mapDispatchToProps)(Settlements);
