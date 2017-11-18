import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import { TabPane, TabContent, Input, Nav, NavItem, NavLink } from "reactstrap";
import Header from "../../components/Header/Header";
import Innovations from "./_Innovations";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import { getSettlement } from "../../actions/getSettlement";

class Storage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 1
    };
    this.handleTabChange = this.handleTabChange.bind(this);
  }

  componentDidMount() {
    const id = window.location.pathname.split("/");
    if (this.props.settlementData === null) {
      this.props.getSettlement(id[2]);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.settlementData && this.props.settlementData === null) {
      this.setState({
        settlement: nextProps.settlementData
      });
    }
  }
  handleTabChange(tab) {
    this.setState({
      searchName: "",
      activeTab: tab
    });
  }
  render() {
    if (this.props.settlementData) {
      return (
        <div>
          <Header name={"Innovations"} showBack />
          <Nav tabs>
            <NavItem>
              <NavLink
                tabIndex="0"
                className={`${this.state.activeTab === 1 ? "active" : ""}`}
                onClick={() => {
                  this.handleTabChange(1);
                }}
              >
                Innovations
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
                Masteries
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId={1}>
              <Innovations
                list={this.props.settlementData.sheet.innovations}
                assets={this.props.settlementData.game_assets.innovations}
                oid={this.props.settlementData.sheet._id.$oid}
              />
            </TabPane>
            <TabPane tabId={2} />
          </TabContent>
        </div>
      );
    }
    return <LoadingSpinner />;
  }
}

function mapStateToProps(state) {
  return {
    settlementData: state.settlementData
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getSettlement
    },
    dispatch
  );
}

Storage.propTypes = {
  getSettlement: PropTypes.func,
  settlementData: PropTypes.shape({
    sheet: PropTypes.object,
    user_assets: PropTypes.object
  })
};

export default connect(mapStateToProps, mapDispatchToProps)(Storage);
