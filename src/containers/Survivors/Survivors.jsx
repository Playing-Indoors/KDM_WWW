import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router";
import PropTypes from "prop-types";
import { TabPane, TabContent, Input, Nav, NavItem, NavLink } from "reactstrap";
import Header from "../../components/Header/Header";
import Icon from "../../components/Icon/Icon";
import Widget from "../../components/Widget/Widget";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import CardList from "../../components/CardList/CardList";
import SurvivorCard from "../../scenes/Survivor/SurvivorCard";
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
        let weapon = survivor.sheet["Weapon Proficiency"];
        const weaponType = survivor.sheet.weapon_proficiency_type;
        if (weaponType) {
          weapon = `${weapon} - ${weaponType.substring(0, 4)}`;
        }
        const favorite =
          survivor.sheet.favorite.indexOf(this.props.userData.user.login) !==
          -1;
        const attributesNew = [
          { label: "Sur", value: survivor.sheet.survival },
          { label: "XP", value: survivor.sheet.hunt_xp },
          { label: "Cou", value: survivor.sheet.Courage },
          { label: "Und", value: survivor.sheet.Understanding },
          {
            label: "Wea",
            value: weapon
          },
          { label: "Ins", value: survivor.sheet.Insanity },
          { label: "Mov", value: survivor.sheet.Movement },
          { label: "Acc", value: survivor.sheet.Accuracy },
          { label: "Str", value: survivor.sheet.Strength },
          { label: "Eva", value: survivor.sheet.Evasion },
          { label: "Luc", value: survivor.sheet.Luck },
          { label: "Spd", value: survivor.sheet.Speed },
          {
            label: "FA",
            value: survivor.sheet.fighting_arts.join(", ") || " - -"
          },
          { label: "Dis", value: survivor.sheet.disorders.join(", ") || "--" },
          {
            label: "Abi",
            value: survivor.sheet.abilities_and_impairments.join(", ") || "-"
          },
          { label: "Cur", value: survivor.sheet.cursed_items.join(", ") || "-" }
        ];
        const attributes = [
          { label: "XP", value: survivor.sheet.hunt_xp },
          { label: "Mov", value: survivor.sheet.Movement },
          { label: "Acc", value: survivor.sheet.Accuracy },
          { label: "Str", value: survivor.sheet.Strength },
          { label: "Eva", value: survivor.sheet.Evasion },
          { label: "Luck", value: survivor.sheet.Luck },
          { label: "Spd", value: survivor.sheet.Speed }
        ];
        const sex = survivor.sheet.sex === "F" ? "female" : "male";
        return (
          <CardList
            key={survivor.sheet._id.$oid}
            name={survivor.sheet.name}
            meta={attributes}
            href={`/settlements/${
              this.props.settlementData.sheet._id.$oid
            }/survivors/${survivor.sheet._id.$oid}`}
            iconLeft={sex}
            iconRight={favorite ? "star" : ""}
          />
          // <SurvivorCard
          //   key={`${survivor.sheet._id.$oid}2`}
          //   survivor={survivor.sheet}
          //   href={`/settlements/${this.props.settlementData.sheet._id
          //     .$oid}/survivors/${survivor.sheet._id.$oid}`}
          //   iconLeft={sex}
          //   iconRight={"star"}
          // />
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
              to={`/settlements/${
                this.props.settlementData.sheet._id.$oid
              }/survivors/create`}
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
                Dead ({this.calculateDead()})
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
    settlementData: state.settlementData,
    userData: state.userData
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
  params: PropTypes.shape({
    oid: PropTypes.string.isRequired
  }),
  settlementData: PropTypes.shape({
    sheet: PropTypes.object,
    user_assets: PropTypes.object
  })
};

export default connect(mapStateToProps, mapDispatchToProps)(Survivors);
