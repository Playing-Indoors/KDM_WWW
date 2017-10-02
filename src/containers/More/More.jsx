import React, { Component } from "react";
import { Link } from "react-router";
import { connect } from "react-redux";
import Icon from "../../components/Icon/Icon";
import CardList from "../../components/CardList/CardList";

class More extends Component {
  render() {
    if (this.props.userData) {
      return (
        <div className="layout layout--center">
          <h2 className="text-center">{this.props.userData.user.login}</h2>
          {/* <div className="text-center">
            <Icon name="logo" />
          </div> */}
          <h3 className="text-center">Current Campaign</h3>
          <h2 className="text-center">
            {this.props.userData.user.current_settlement.$oid}
          </h2>
          <CardList name="Campaigns" href="/settlements" iconRight="right" />
          <CardList name="Glossary / FAQ" href="/resources" iconRight="right" />
          <CardList name="Settings" href="/settings" iconRight="right" />
          <CardList name="Log Out" href="/logout" iconRight="right" />
        </div>
      );
    }
    return null;
  }
}

function mapStateToProps(state) {
  return { userData: state.userData };
}

export default connect(mapStateToProps, null)(More);
