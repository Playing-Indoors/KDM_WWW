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
      <li data-i={index} key={index} className="nav-item">
        <Link
          className="nav-link"
          activeClassName="active"
          to={item.link}
          title={item.title}
        >
          <div className="nav-link-icon">
            <Icon name={item.icon} />
          </div>
          {/* <div className="nav-link-text">{item.title}</div> */}
        </Link>
      </li>
    ));
  }
  render() {
    return (
      <nav className="mainNav">
        <ol className="nav nav-fill">{this.renderMainNav()}</ol>
      </nav>
    );
  }
}

export default Nav;
