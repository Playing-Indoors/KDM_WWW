import React from "react";
import {
  Label,
  Button,
  Input,
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
      activeTab: "1"
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
    console.log("Next page");
  }
  render() {
    return (
      <div>
        <Header name={"Create New Campaign"} showBack>
          <span className="header-action">
            <Icon name={"check"} />
          </span>
        </Header>
        <div className="layout">
          <Nav tabs>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === "1" })}
                onClick={() => {
                  this.toggle("1");
                }}
              >
                Tab1
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === "2" })}
                onClick={() => {
                  this.toggle("2");
                }}
              >
                Moar Tabs
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId="1">111</TabPane>
            <TabPane tabId="2">sdfsdfsdf</TabPane>
          </TabContent>
          <form onSubmit={this.handleSubmit}>
            {/* TODO: Make this a form */}
            <Label>Name the Settlement</Label>
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
        </div>
      </div>
    );
  }
}

export default Settlements;
