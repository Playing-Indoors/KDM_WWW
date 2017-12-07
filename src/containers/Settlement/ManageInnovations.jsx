import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import { TabPane, TabContent, Input, Nav, NavItem, NavLink } from "reactstrap";
import Header from "../../components/Header/Header";
import Innovations from "./_Innovations";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import { getSettlement } from "../../actions/getSettlement";

class ManageInnovations extends React.Component {
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
  buildSurvivorList(type) {
    const list = this.props.settlementData.sheet.innovations.filter(
      card =>
        this.props.settlementData.game_assets.innovations[card].type === type
    );
    return list;
  }
  // TODO: Optimize this list as this is done multiple times.
  // Should probably be done on load once.
  buildAssetList(type) {
    const assets = {};
    Object.entries(
      this.props.settlementData.game_assets.innovations
    ).forEach(card => {
      if (card[1].type === type) {
        assets[card[0]] = card[1];
      }
    });
    return assets;
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
                {/* TODO: Another inefficiency */}
                Innovations ({this.buildSurvivorList("innovation").length})
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
                {/* TODO: Another inefficiency */}
                Principles ({this.buildSurvivorList("principle").length})
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
                {/* TODO: Another inefficiency */}
                Masteries ({this.buildSurvivorList("weapon_mastery").length})
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId={1}>
              <Innovations
                list={this.buildSurvivorList("innovation")}
                assets={this.buildAssetList("innovation")}
                oid={this.props.settlementData.sheet._id.$oid}
              />
            </TabPane>
            <TabPane tabId={2}>
              <Innovations
                list={this.buildSurvivorList("principle")}
                assets={this.buildAssetList("principle")}
                oid={this.props.settlementData.sheet._id.$oid}
              />
            </TabPane>
            <TabPane tabId={3}>
              <Innovations
                list={this.buildSurvivorList("weapon_mastery")}
                assets={this.buildAssetList("weapon_mastery")}
                oid={this.props.settlementData.sheet._id.$oid}
              />
            </TabPane>
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

ManageInnovations.propTypes = {
  getSettlement: PropTypes.func,
  settlementData: PropTypes.shape({
    sheet: PropTypes.object,
    user_assets: PropTypes.object
  })
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageInnovations);
