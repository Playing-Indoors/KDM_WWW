import React from "react";
import { Button } from "reactstrap";
import { Link } from "react-router";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Header from "../../components/Header/Header";
import Icon from "../../components/Icon/Icon";
import CardList from "../../components/CardList/CardList";
import CardListMeta from "../../components/CardList/CardListMeta";

class Settlements extends React.Component {
  renderSettlements() {
    if (this.props.userData) {
      return this.props.userData.dashboard.settlements.map((settlement, l) => {
        return (
          <CardList
            name={settlement.name}
            desc={settlement.campaign}
            href={`/settlements/${settlement._id.$oid}/`}
            key={settlement._id.$oid}
          >
            <CardListMeta label="Year" value={settlement.lantern_year} />
            <CardListMeta label="Population" value={settlement.population} />
            <CardListMeta
              label="Expansions"
              value={settlement.expansions.length}
            />
          </CardList>
        );
      });
    }
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
