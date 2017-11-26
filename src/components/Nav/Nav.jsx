import React, { Component } from "react";
import { Link } from "react-router";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Icon from "../../components/Icon/Icon";

class Nav extends Component {
  currentSettlement(path) {
    let oid = "";
    if (this.params && this.params.oid) {
      oid = this.params.oid;
    } else if (this.props.userData.user.current_settlement) {
      oid = this.props.userData.user.current_settlement.$oid;
    }
    if (oid.length !== 0) {
      if (path) {
        return `/settlements/${oid}/${path}`;
      }
      return `/settlements/${oid}`;
    }
    return null;
  }
  buildNav() {
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
      return this.buildNav().map((item, index) => (
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
