import React, { Component } from "react";
import { Link } from "react-router";
import Icon from "../../components/Icon/Icon";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav: [
        {
          title: "Campaign Log",
          icon: "log",
          link: "/settlements/1234/log"
        },
        {
          title: "Settlement",
          icon: "settlement",
          link: "/settlements/1234/log"
        },
        {
          title: "Survivors",
          icon: "survivors",
          link: "/settlements/1234/survivors/"
        },
        {
          title: "Resources",
          icon: "storage",
          link: "/settlements/1234/storage"
        },
        {
          title: "Menu",
          icon: "menu",
          link: "/settlements/1234/more"
        }
      ]
    };
  }
  renderMainNav() {
    return this.state.nav.map((item, index) => (
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

export default Nav;
