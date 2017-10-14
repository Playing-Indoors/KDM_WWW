import React, { Component } from "react";
import { Link } from "react-router";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Icon from "../../components/Icon/Icon";

class Nav extends Component {
  getNav() {
    if (!this.props.userData) {
      return [
        {
          title: "Menu",
          icon: "menu",
          link: "/more"
        }
      ];
    }
    return [
      {
        title: "Settlement",
        icon: "settlement",
        link: `/settlements/${this.props.userData.user.current_settlement
          .$oid}/settlement`
      },
      {
        title: "Survivors",
        icon: "survivors",
        link: `/settlements/${this.props.userData.user.current_settlement
          .$oid}/survivors/`
      },
      {
        title: "Resources",
        icon: "storage",
        link: `/settlements/${this.props.userData.user.current_settlement
          .$oid}/storage`
      },
      {
        title: "Campaign Log",
        icon: "log",
        link: `/settlements/${this.props.userData.user.current_settlement
          .$oid}/log`
      },
      {
        title: "Menu",
        icon: "menu",
        link: "/more"
      }
    ];
  }
  renderMainNav() {
    return this.getNav().map((item, index) => (
      <Link
        key={index}
        className="nav-link"
        activeClassName="active"
        to={item.link}
        title={item.title}
      >
        <Icon name={item.icon} />
        {/* <div className="nav-link-text">{item.title}</div> */}
      </Link>
    ));
  }
  render() {
    return <nav className="mainNav">{this.renderMainNav()}</nav>;
  }
}

function mapStateToProps(state) {
  return { userData: state.userData };
}

Nav.propTypes = {
  userData: PropTypes.shape({
    user: PropTypes.object
  })
};

export default connect(mapStateToProps, null)(Nav);
