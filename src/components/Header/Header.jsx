import React, { Component } from "react";
import PropTypes from "prop-types";
import Icon from "../../components/Icon/Icon";
import { Link } from "react-router";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { updateHeader } from "../../actions/updateHeader";
import { browserHistory } from "react-router";

class Header extends Component {
  constructor(props) {
    super(props);
    this.handleNav = this.handleNav.bind(this);
  }
  handleNav() {
    browserHistory.goBack();
  }
  renderName() {
    if (this.props.superSubName) {
      return `${this.props.superSubName}`;
    } else if (this.props.subName) {
      return `${this.props.subName}`;
    } else {
      return `${this.props.name}`;
    }
  }
  renderBack() {
    if (this.props.back.length > 0) {
      return (
        <div className="header-actions">
          <Link to={this.props.back} className="header-action">
            <Icon name={"left"} />
          </Link>
        </div>
      );
    } else if (this.props.showBack) {
      return (
        <div className="header-actions">
          <a tabIndex="0" className="header-action" onClick={this.handleNav}>
            <Icon name="left" />
          </a>
        </div>
      );
    }
    return null;
  }
  renderActions() {
    if (this.props.children) {
      return <div className="header-actions">{this.props.children}</div>;
    }
    return null;
  }
  render() {
    return (
      <header className="header">
        {/* Only show this if back is activated */}
        {this.renderBack()}
        <div className="header-title">{this.renderName()}</div>
        {this.renderActions()}
        {/* <a className="header-action">
          <Icon name="info" />
        </a>
        <a className="header-action">
          <Icon name="gear" />
        </a> */}
      </header>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      updateHeader: updateHeader
    },
    dispatch
  );
}

Header.defaultProps = {
  name: "Page Title",
  back: "",
  showBack: false
};

Header.propTypes = {
  name: PropTypes.string,
  subName: PropTypes.string,
  back: PropTypes.string,
  showBack: PropTypes.bool,
  children: PropTypes.node
};

export default connect(null, mapDispatchToProps)(Header);
