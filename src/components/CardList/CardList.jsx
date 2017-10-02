import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button } from "reactstrap";
import { Link } from "react-router";
import Icon from "../../components/Icon/Icon";

class CardList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  // renderMeta() {
  // 	if (this.props.meta) {
  // 		return <div className="cardList-meta">{this.props.meta.join(' | ')}</div>;
  // 	}
  // 	return null;
  // }
  renderIcon(name) {
    if (name.length > 0) {
      return <Icon name={name} />;
    }
    return null;
  }
  renderDesc() {
    if (this.props.desc.length > 0) {
      return <div className="cardList-desc">{this.props.desc}</div>;
    }
    return null;
  }
  renderMeta() {
    if (this.props.children.length > 0) {
      return <div className="cardList-meta">{this.props.children}</div>;
    }
    return null;
  }
  render() {
    return (
      <Link to={this.props.href} className="cardList">
        <div className="cardList-header">
          {this.renderIcon(this.props.iconLeft)}
          <div className="cardList-header-name">{this.props.name}</div>
          {this.renderIcon(this.props.iconRight)}
        </div>
        {this.renderDesc()}
        {this.renderMeta()}
      </Link>
    );
  }
}

CardList.defaultProps = {
  name: "",
  desc: "",
  children: [],
  button: "View",
  href: "#openCampaign",
  iconLeft: "",
  iconRight: ""
  // desc: 'Description',
};

CardList.propTypes = {
  name: PropTypes.string,
  desc: PropTypes.string,
  href: PropTypes.string,
  button: PropTypes.string,
  iconLeft: PropTypes.string,
  iconRight: PropTypes.string,
  children: PropTypes.node
};

export default CardList;
