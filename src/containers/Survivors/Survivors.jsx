import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router";
import {
  Alert,
  TabPane,
  TabContent,
  Input,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import PropTypes from "prop-types";
import Header from "../../components/Header/Header";
import Icon from "../../components/Icon/Icon";
import Widget from "../../components/Widget/Widget";
import CardList from "../../components/CardList/CardList";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import { getSettlement } from "../../actions/getSettlement";

class Survivors extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: 1
    };
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
  toggle(tab) {
    this.setState({
      activeTab: tab
    });
  }
  renderSurvivors(alive) {
    if (this.props.settlementData) {
      console.log("alive", alive);
      const filtered = this.props.settlementData.user_assets.survivors.filter(
        survivor => {
          if (alive) {
            return !survivor.sheet.dead;
          }
          return survivor.sheet.dead;
        }
      );
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
    } else {
      return null;
    }
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
                  this.toggle(1);
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
                  this.toggle(2);
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
                  this.toggle(3);
                }}
              >
                Hunting
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId={1}>
              <div className="layout layout--resources">
                <Widget>
                  <Input placeholder="Search survivors..." />
                </Widget>
                {this.renderSurvivors(true)}
              </div>
            </TabPane>
            <TabPane tabId={2}>
              <div className="layout layout--resources">
                <Widget>
                  <Input placeholder="Search survivors..." />
                </Widget>
                {this.renderSurvivors(false)}
              </div>
            </TabPane>
            <TabPane tabId={3}>
              <Alert color="warning">
                <strong>Coming soon!</strong> <br />
                To manage survivors on the hunt/showdown go back to the alive
                tab and edit them individually.
              </Alert>
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
