import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router";
import Icon from "../../components/Icon/Icon";

class Nav extends Component {
  renderMainNav() {
    return this.props.data.map((item, index) => (
      <li data-i={index} key={index} className="nav-item">
        <Link className="nav-link" activeClassName="active" to={item.link}>
          <div className="nav-link-icon">
            <Icon name={item.icon} />
          </div>
          <div className="nav-link-text">{item.title}</div>
        </Link>
      </li>
    ));
  }
  render() {
    if (!this.props.showBack) {
      return (
        <nav className="mainNav">
          <ol className="nav nav-fill">{this.renderMainNav()}</ol>
        </nav>
      );
    }
    return null;
  }
}

Nav.defaultProps = {
  data: [],
  showNav: true
};

Nav.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  showNav: PropTypes.bool
};

export default Nav;
