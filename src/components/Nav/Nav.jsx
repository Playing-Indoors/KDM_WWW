import React, { Component } from "react";
import { Link } from "react-router";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Icon from "../../components/Icon/Icon";

class Nav extends Component {
  currentSettlement(path) {
    const currentSettlement = this.props.userData.user.current_settlement;
    if (currentSettlement && path) {
      return `/settlements/${currentSettlement.$oid}/${path}`;
    } else if (currentSettlement) {
      return `/settlements/${currentSettlement.$oid}`;
    }
    return null;
  }
  getNav() {
    return [
      {
        title: "Settlement",
        icon: "settlement",
        link: this.currentSettlement()
      },
      {
        title: "Survivors",
        icon: "survivors",
        link: this.currentSettlement("survivors")
      },
      {
        title: "Resources",
        icon: "storage"
      },
      // {
      //   title: "Campaign Log",
      //   icon: "log"
      // },
      // {
      //   title: "Resources",
      //   icon: "storage",
      //   link: this.currentSettlement("storage")
      // },
      {
        title: "Campaign Log",
        icon: "log",
        link: this.currentSettlement("log")
      },
      {
        title: "Dashboard",
        icon: "user",
        link: "/dashboard"
      }
    ];
  }
  renderMainNav() {
    if (this.props.userData) {
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
    return null;
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

export default connect(mapStateToProps, null, null, { pure: false })(Nav);
