import React from "react";
import { Button } from "reactstrap";
import { Link, browserHistory } from "react-router";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Header from "../../components/Header/Header";
import Icon from "../../components/Icon/Icon";
import CardList from "../../components/CardList/CardList";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import { setCurrentSettlement } from "../../actions/getUserData";

class Settlements extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleSetRedirect = this.handleSetRedirect.bind(this);
  }
  handleSetRedirect(id) {
    console.log("id", id);
    setCurrentSettlement(id)
      .then(res => {
        console.log("res", res);
      })
      .catch(err => {
        console.log("err", err);
      });
    // window.location.pathname = `/settlements/${id}/settlement`;
    browserHistory.push(`/settlements/${id}`);
  }
  renderSettlements() {
    if (this.props.userData && this.props.userData.dashboard) {
      const campaigns = this.props.userData.dashboard.campaigns;
      if (campaigns.length > 0) {
        return campaigns.map(settlement => {
          return (
            <CardList
              name={settlement.name}
              desc={settlement.campaign}
              action={() => this.handleSetRedirect(settlement._id.$oid)}
              key={settlement._id.$oid}
              meta={[
                { label: "Year", value: settlement.lantern_year },
                { label: "Population", value: settlement.population },
                { label: "Expansions", value: settlement.expansions.length }
              ]}
            />
          );
        });
      }
      return <CardList name={"Create Campaign"} href={"/settlements/create"} />;
    }
    return <LoadingSpinner />;
  }
  render() {
    return (
      <div>
        <Header name={"Settlements"} back="/dashboard">
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
