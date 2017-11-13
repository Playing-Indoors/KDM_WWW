import React from "react";
import { TabPane, TabContent, Input, Nav, NavItem, NavLink } from "reactstrap";
import Header from "../../components/Header/Header";

class Info extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 1
    };
    this.handleTabChange = this.handleTabChange.bind(this);
  }

  handleTabChange(tab) {
    this.setState({
      searchName: "",
      activeTab: tab
    });
  }
  render() {
    return (
      <div>
        <Header name={"Info"} />
        <Nav tabs>
          <NavItem>
            <NavLink
              tabIndex="0"
              className={`${this.state.activeTab === 1 ? "active" : ""}`}
              onClick={() => {
                this.handleTabChange(1);
              }}
            >
              Glossary
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
              FAQ
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId={1}>{/* <Resources /> */}</TabPane>
          <TabPane tabId={2}>{/* <Gear /> */}</TabPane>
        </TabContent>
      </div>
    );
  }
}

export default Info;
