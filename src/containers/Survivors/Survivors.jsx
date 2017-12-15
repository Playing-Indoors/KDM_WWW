import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router";
import PropTypes from "prop-types";
import { TabPane, TabContent, Input, Nav, NavItem, NavLink } from "reactstrap";
import { setPreference } from "../../actions/preferences";
import Header from "../../components/Header/Header";
import Icon from "../../components/Icon/Icon";
import Widget from "../../components/Widget/Widget";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import SurvivorCard from "../../scenes/Survivor/SurvivorCard";
import { getSettlement } from "../../actions/getSettlement";

class Survivors extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 1,
      toolbarDetailed: props.userData.user.preferences.twToolbarDetailed
    };
    this.handleTabChange = this.handleTabChange.bind(this);
    this.handleToolbarDetail = this.handleToolbarDetail.bind(this);
  }
  componentDidMount() {
    if (this.props.settlementData === null) {
      this.props.getSettlement(this.props.params.oid);
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.settlementData && this.props.settlementData === null) {
      this.setState({
        settlementData: nextProps.settlementData
      });
    }
  }
  calculateDead() {
    const filtered = this.props.settlementData.user_assets.survivors.filter(
      survivor => survivor.sheet.dead
    );
    return filtered.length;
  }
  // #region handles
  handleTabChange(tab) {
    this.setState({
      activeTab: tab
    });
  }
  handleToolbarDetail(detailed) {
    if (detailed !== this.state.toolbarDetailed) {
      this.setState({
        toolbarDetailed: detailed
      });
      const userId = localStorage.getItem("userId");
      const data = {
        user_id: userId,
        handle: "twToolbarDetailed",
        value: detailed
      };
      this.props.setPreference(userId, data);
    }
  }
  // #endregion
  renderToolbar() {
    return (
      <div className="tw-flex tw-justify-around tw-px-1 tw-bg-gray-darkest tw-text-xs">
        <button
          onClick={() => this.handleToolbarDetail(false)}
          className={`${this.state.toolbarDetailed
            ? "tw-text-gray"
            : "tw-text-yellow"} tw-p-3 tw-no-outline hover:tw-underline focus:tw-underline`}
        >
          Condensed
        </button>
        <button
          onClick={() => this.handleToolbarDetail(true)}
          className={`${this.state.toolbarDetailed
            ? "tw-text-yellow"
            : "tw-text-gray"} tw-p-3 tw-no-outline hover:tw-underline focus:tw-underline`}
        >
          Expanded
        </button>
      </div>
    );
  }
  renderSurvivors(alive) {
    // Filters if they are alive
    const filtered = this.props.settlementData.user_assets.survivors.filter(
      survivor => {
        if (alive) {
          return !survivor.sheet.dead;
        }
        return survivor.sheet.dead;
      }
    );
    // sort by name
    filtered.sort((a, b) => {
      const nameA = a.sheet.name.toUpperCase();
      const nameB = b.sheet.name.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
    // Sort favorites
    filtered.sort((a, b) => {
      const favA =
        a.sheet.favorite.indexOf(this.props.userData.user.login) !== -1;
      const favB =
        b.sheet.favorite.indexOf(this.props.userData.user.login) !== -1;
      if (favA && !favB) {
        return -1;
      }
      if (!favA && favB) {
        return 1;
      }
      return 0;
    });
    return filtered.map(survivor => (
      <SurvivorCard
        key={`${survivor.sheet._id.$oid}`}
        survivor={survivor.sheet}
        settlement={this.props.params.oid}
        detailed={this.state.toolbarDetailed}
      />
    ));
  }
  render() {
    if (this.props.settlementData) {
      return (
        <div>
          <Header name={"Survivors"}>
            <Link
              to={`/settlements/${this.props.settlementData.sheet._id
                .$oid}/survivors/create`}
              className="header-action"
            >
              <Icon name={"plus"} />
            </Link>
          </Header>
          <Nav tabs>
            <NavItem>
              <NavLink
                tabIndex="0"
                className={`${this.state.activeTab === 1 ? "active" : ""}`}
                onClick={() => {
                  this.handleTabChange(1);
                }}
              >
                Alive ({this.props.settlementData.sheet.population})
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
                Dead ({this.props.settlementData.sheet.death_count})
              </NavLink>
            </NavItem>
            {/* <NavItem>
              <NavLink
                tabIndex="0"
                className={`${this.state.activeTab === 3 ? "active" : ""}`}
                onClick={() => {
                  this.handleTabChange(3);
                }}
              >
                Hunting
              </NavLink>
            </NavItem> */}
          </Nav>
          <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId={1}>
              {this.renderToolbar()}
              <div className="layout">{this.renderSurvivors(true)}</div>
            </TabPane>
            <TabPane tabId={2}>
              {this.renderToolbar()}
              <div className="layout">{this.renderSurvivors(false)}</div>
            </TabPane>
            <TabPane tabId={3}>
              <div className="layout">
                <h3 className="text-center mb-0">Hunting Coming Soon</h3>
                <Widget>
                  To manage survivors on the hunt/showdown go back to the alive
                  tab and edit them individually.
                </Widget>
              </div>
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
    settlementData: state.settlementData,
    userData: state.userData
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getSettlement,
      setPreference
    },
    dispatch
  );
}

Survivors.propTypes = {
  getSettlement: PropTypes.func,
  params: PropTypes.shape({
    oid: PropTypes.string.isRequired
  }),
  settlementData: PropTypes.shape({
    sheet: PropTypes.object,
    user_assets: PropTypes.object
  })
};

export default connect(mapStateToProps, mapDispatchToProps)(Survivors);
