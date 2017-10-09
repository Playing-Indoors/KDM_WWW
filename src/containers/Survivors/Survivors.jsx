import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router";
import { Input, Nav, NavItem, NavLink } from "reactstrap";
import Header from "../../components/Header/Header";
import Icon from "../../components/Icon/Icon";
import Widget from "../../components/Widget/Widget";
import CardList from "../../components/CardList/CardList";
import { getSettlement } from "../../actions/getSettlement";

class Survivors extends React.Component {
  componentDidMount() {
    if (this.props.settlementData === null) {
      let id = window.location.pathname.split("/");
      this.props.getSettlement(id[2]);
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.settlementData) {
      this.setState({
        settlementData: nextProps.settlementData
      });
    }
  }
  renderSurvivors() {
    if (this.props.settlementData) {
      return this.props.settlementData.user_assets.survivors.map(survivor => {
        return (
          <CardList
            key={survivor.sheet._id.$oid}
            name={survivor.sheet.name}
            href={survivor.sheet._id.$oid}
          >
            Hunt XP: {survivor.sheet.hunt_xp} &nbsp; &nbsp; Courage:{" "}
            {survivor.sheet.Courage} &nbsp; &nbsp; Understanding{" "}
            {survivor.sheet.Understanding}
          </CardList>
        );
      });
    } else {
      return <div>"Loading Survivors..."</div>;
    }
  }
  render() {
    return (
      <div>
        <Header name={"Survivors"}>
          <Link to={"create"} className="header-action">
            <Icon name={"plus"} />
          </Link>
        </Header>
        <Nav tabs>
          <NavItem>
            <NavLink>Alive (12)</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>Dead (3)</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>Hunting</NavLink>
          </NavItem>
        </Nav>

        <Widget>
          <Input placeholder="Search survivors..." />
        </Widget>
        {this.renderSurvivors()}
      </div>
    );
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

export default connect(mapStateToProps, mapDispatchToProps)(Survivors);
