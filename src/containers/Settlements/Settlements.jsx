import React from "react";
import { Button } from "reactstrap";
import { Link } from "react-router";
import Header from "../../components/Header/Header";
import Icon from "../../components/Icon/Icon";
import CardList from "../../components/CardList/CardList";
import CardListMeta from "../../components/CardList/CardListMeta";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class Settlements extends React.Component {
  renderSettlements() {
    if (this.props.userData) {
      return this.props.userData.dashboard.settlements.map((settlement, l) => {
        return (
          <CardList
            name={settlement.name}
            desc={settlement.campaign}
            href="#route"
          >
            <CardListMeta value={settlement.lantern_year} />
            <CardListMeta value={settlement.population} />
          </CardList>
        );
      });
    }
  }
  render() {
    return (
      <div>
        <Header name={"Campaigns"} showBack>
          <Link to={"/campaigns/create"} className="header-action">
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
