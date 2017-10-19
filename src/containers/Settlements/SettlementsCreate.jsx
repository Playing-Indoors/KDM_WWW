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
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleExpansion = this.toggleExpansion.bind(this);
    this.randomSettlement = this.randomSettlement.bind(this);
    this.state = {
      activeTab: 1,
      name: "",
      campaign: "People of the Lantern",
      expansions: [
        ("gorm": false),
        ("spidicules": false),
        ("dung_beetle_knight": false),
        ("sunstalker": false),
        ("lion_god": false),
        ("manhunter": false),
        ("lion_knight": false),
        ("slenderman": false),
        ("lonely_tree": false),
        ("green_knight_armor": false),
        ("allison_the_twilight_knight": false),
        ("before_the_wall": false),
        ("beyond_the_wall": false),
        ("white_speakr": false)
      ]
    };
  }
  toggle(tab) {
    if (tab < this.state.activeTab) {
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
  handleNameChange(e) {
    this.setState({
      name: e.target.value
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
    console.warn("CALEB ADD IN EXPANSIONS ARRAY HERE!");
    let data = {
      user_id: userId,
      name: this.state.name,
      campaign: this.state.campaign
    };
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
                className={classnames({ active: this.state.activeTab === 1 })}
              >
                Name
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === 2 })}
              >
                Campaign
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === 3 })}
              >
                Expansions
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId={1}>
              <form className="layout" onSubmit={this.handleSubmit}>
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
                    onChange={this.handleNameChange}
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
              <form className="layout" onSubmit={this.handleSubmit}>
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
              <form className="layout" onSubmit={this.handleSubmit}>
                <legend>Select Expansions</legend>
                <Widget>
                  <div>
                    <h4>Quarry</h4>
                    <Toggle
                      updateToggle={this.toggleExpansion}
                      for="gorm"
                      active={this.state.expansions.gorm}
                      label="Gorm"
                    />
                    <Toggle
                      updateToggle={this.toggleExpansion}
                      for="exp_spidicules"
                      active={this.state.expansions.spidicules}
                      label="Spidicules"
                    />
                    <Toggle
                      updateToggle={this.toggleExpansion}
                      for="exp_dbk"
                      active={this.state.expansions.dung_beetle_knight}
                      label="Dung Beetle Knight"
                    />
                    <Toggle
                      updateToggle={this.toggleExpansion}
                      for="exp_sunstalker"
                      active={this.state.expansions.sunstalker}
                      label="Sunstalker"
                    />
                    <Toggle
                      updateToggle={this.toggleExpansion}
                      for="exp_lion_god"
                      active={this.state.expansions.lion_god}
                      label="Lion God"
                    />
                    <h4 className="mt-4">Nemisis</h4>
                    <Toggle
                      active={this.state.expansions.manhunter}
                      updateToggle={this.toggleExpansion}
                      label="Manhunter"
                    />
                    <Toggle
                      active={this.state.expansions.lion_knight}
                      updateToggle={this.toggleExpansion}
                      label="Lion Knight"
                    />
                    <Toggle
                      active={this.state.expansions.slenderman}
                      updateToggle={this.toggleExpansion}
                      label="Slenderman"
                    />
                    <h4 className="mt-4">Enhancement</h4>
                    <Toggle
                      active={this.state.expansions.lonely_tree}
                      updateToggle={this.toggleExpansion}
                      label="Lonely Tree"
                    />
                    <Toggle
                      active={this.state.expansions.green_knight_armor}
                      updateToggle={this.toggleExpansion}
                      label="Green Knight Armor"
                    />
                    <Toggle
                      active={this.state.expansions.allison_the_twilight_knight}
                      updateToggle={this.toggleExpansion}
                      label="Allison the Twilight Knight"
                    />
                    <Toggle
                      active={this.state.expansions.before_the_wall}
                      updateToggle={this.toggleExpansion}
                      label="Before the Wall"
                    />
                    <Toggle
                      active={this.state.expansions.beyond_the_wall}
                      updateToggle={this.toggleExpansion}
                      label="Beyond the Wall"
                    />
                    <Toggle
                      active={this.state.expansions.white_speakr}
                      updateToggle={this.toggleExpansion}
                      label="White Speaker"
                    />
                  </div>
                  <WidgetFooter>
                    <Button color="primary" size="sm" type="submit">
                      Confirm
                    </Button>
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
