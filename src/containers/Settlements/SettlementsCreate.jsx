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
import classnames from "classnames";
import Header from "../../components/Header/Header";
import Icon from "../../components/Icon/Icon";
import Widget from "../../components/Widget/Widget";
import WidgetFooter from "../../components/Widget/WidgetFooter";

class Settlements extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      activeTab: 1
    };
  }
  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  handleSubmit(e) {
    e.preventDefault();
    if (this.state.activeTab < 4) {
      this.setState({
        activeTab: this.state.activeTab + 1
      });
    } else {
      console.warn("KHOA CREATE SETTLEMENT!");
    }
  }
  render() {
    return (
      <div>
        <Header name={"Create New Campaign"} showBack>
          <span className="header-action">
            <Icon name={"check"} />
          </span>
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
                  <Input
                    type="text"
                    name="name"
                    placeholder="Enter settlement name..."
                    size="sm"
                    autoFocus
                    required
                  />
                  <WidgetFooter>
                    <Button color="gray" size="sm">
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
                      <option>People of the Lantern</option>
                      <option>People of the Stars</option>
                      <option>People of the Sun</option>
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
                    placeholder="Enter settlement name..."
                    size="sm"
                    autoFocus
                    required
                  />
                  <WidgetFooter>
                    <Button color="gray" size="sm">
                      Randomize Name
                    </Button>
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

export default Settlements;
