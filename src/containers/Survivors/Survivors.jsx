import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router";
import PropTypes from "prop-types";
import { TabPane, TabContent, Input, Nav, NavItem, NavLink } from "reactstrap";
import Header from "../../components/Header/Header";
import Icon from "../../components/Icon/Icon";
import Widget from "../../components/Widget/Widget";
import CardList from "../../components/CardList/CardList";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import { getSettlement } from "../../actions/getSettlement";

class Survivors extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: 1,
      searchName: ""
    };
    this.handleTabChange = this.handleTabChange.bind(this);
    this.handleSearchInput = this.handleSearchInput.bind(this);
  }
  componentDidMount() {
    if (this.props.settlementData === null) {
      const id = window.location.pathname.split("/");
      this.props.getSettlement(id[2]);
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.settlementData && this.props.settlementData === null) {
      this.setState({
        settlementData: nextProps.settlementData
      });
    }
  }
  handleSearchInput(e) {
    this.setState({
      searchName: e.target.value
    });
  }
  handleTabChange(tab) {
    this.setState({
      searchName: "",
      activeTab: tab
    });
  }
  renderSurvivors(alive) {
    if (this.props.settlementData) {
      // Filters if they are alive
      let filtered = this.props.settlementData.user_assets.survivors.filter(
        survivor => {
          if (alive) {
            return !survivor.sheet.dead;
          }
          return survivor.sheet.dead;
        }
      );
      // Check to see if we have a search query
      if (this.state.searchName.length > 0) {
        filtered = filtered.filter(survivor => {
          const search = this.state.searchName.toLowerCase();
          const name = survivor.sheet.name.toLowerCase();
          return name.indexOf(search) >= 0;
        });
        if (filtered.length === 0) {
          return <Widget>No survivors match your search.</Widget>;
        }
      }
      return filtered.map(survivor => {
        const attributes = [
          { label: "Survival", value: survivor.sheet.Survival },
          { label: "Hunt XP", value: survivor.sheet.hunt_xp },
          { label: "Courage", value: survivor.sheet.Courage },
          { label: "Understanding", value: survivor.sheet.Understanding }
        ];
        const sex = survivor.sheet.sex === "F" ? "female" : "male";
        return (
          <CardList
            key={survivor.sheet._id.$oid}
            name={survivor.sheet.name}
            meta={attributes}
            href={`/settlements/${this.props.settlementData.sheet._id
              .$oid}/survivors/${survivor.sheet._id.$oid}`}
            iconLeft={sex}
          />
        );
      });
    }
    return null;
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
            <NavItem>
              <NavLink
                tabIndex="0"
                className={`${this.state.activeTab === 3 ? "active" : ""}`}
                onClick={() => {
                  this.handleTabChange(3);
                }}
              >
                Hunting
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId={1}>
              <div className="layout">
                <Widget>
                  <Input
                    placeholder="Search survivors..."
                    value={this.state.searchName}
                    onChange={this.handleSearchInput}
                  />
                </Widget>
                {this.renderSurvivors(true)}
              </div>
            </TabPane>
            <TabPane tabId={2}>
              <div className="layout">
                <Widget>
                  <Input
                    placeholder="Search survivors..."
                    value={this.state.searchName}
                    onChange={this.handleSearchInput}
                  />
                </Widget>
                {this.renderSurvivors(false)}
              </div>
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

Survivors.propTypes = {
  getSettlement: PropTypes.func,
  settlementData: PropTypes.shape({
    sheet: PropTypes.object,
    user_assets: PropTypes.object
  })
};

export default connect(mapStateToProps, mapDispatchToProps)(Survivors);
