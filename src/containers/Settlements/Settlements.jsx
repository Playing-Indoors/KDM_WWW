import React from "react";
import { Button } from "reactstrap";
import { Link, browserHistory } from "react-router";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Header from "../../components/Header/Header";
import Icon from "../../components/Icon/Icon";
import CardList from "../../components/CardList/CardList";
import { setCurrentSettlement } from "../../actions/getUserData";

class Settlements extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleSetRedirect = this.handleSetRedirect.bind(this);
  }
  handleSetRedirect(id) {
    setCurrentSettlement(id)
      .then(res => {
        console.log("res", res);
      })
      .catch(err => {
        console.log("err", err);
      });
    browserHistory.push(`/settlements/${id}/`);
  }
  renderSettlements() {
    if (this.props.userData) {
      return this.props.userData.dashboard.settlements.map((settlement, l) => {
        return (
          <CardList
            name={settlement.name}
            desc={settlement.campaign}
            action={() => this.handleSetRedirect(settlement._id.$oid)}
            key={settlement._id.$oid}
            id={settlement._id.$oid}
            meta={[
              { label: "Year", value: settlement.lantern_year },
              { label: "Population", value: settlement.population },
              { label: "Expansions", value: settlement.expansions.length }
            ]}
          />
        );
      });
    }
    return null;
  }
  render() {
    return (
      <div>
        <Header name={"Settlements"} back="/more">
          <Link to={"/settlements/create"} className="header-action">
            <Icon name={"plus"} />
          </Link>
        </Header>
        <div className="layout">{this.renderSettlements()}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { userData: state.userData };
}

export default connect(mapStateToProps, null)(Settlements);
