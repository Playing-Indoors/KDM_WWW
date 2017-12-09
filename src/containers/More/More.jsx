import React, { Component } from "react";
import { Link } from "react-router";
import { connect } from "react-redux";
import Header from "../../components/Header/Header";
import Icon from "../../components/Icon/Icon";
import CardList from "../../components/CardList/CardList";

class Dashboard extends Component {
  render() {
    if (this.props.userData) {
      return (
        <div>
          <Header name={"Dashboard"} />
          <div className="layout layout--center">
            <h2 className="text-center mt-4">
              {this.props.userData.user.login}
            </h2>
            <div className="profile profile-80">
              <Icon name="user" />
            </div>
            <CardList
              name="Settlements"
              href="/settlements"
              iconRight="right"
            />
            {/* <CardList
              name="Glossary / FAQ"
              href="/resources"
              iconRight="right"
            /> */}
            <CardList name="About" href="/about" iconRight="right" />
            <a
              className="cardList"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/Playing-Indoors/KDM_WWW/issues"
            >
              <div className="cardList-content">
                <div className="cardList-header">
                  <div className="cardList-header-name">Report Bug</div>
                  <Icon name={"right"} />
                </div>
              </div>
            </a>
            {/* <CardList name="Settings" href="/settings" iconRight="right" /> */}
            <CardList name="Log Out" href="/logout" iconRight="right" />
          </div>
        </div>
      );
    }
    return null;
  }
}

function mapStateToProps(state) {
  return { userData: state.userData };
}

export default connect(mapStateToProps, null)(Dashboard);
