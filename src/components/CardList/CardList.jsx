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
  render() {
    return (
      <Link to={this.props.href} className="cardList">
        <div className="cardList-header">
          <Icon name={"left"} />
          <div className="cardList-header-name">{this.props.name}</div>
          <Icon name={"left"} />
        </div>
        <div className="cardList-desc">{this.props.desc}</div>
        <div className="cardList-meta">{this.props.children}</div>
      </Link>
    );
  }
}

CardList.defaultProps = {
  // name: 'Name',
  button: "View",
  href: "#openCampaign"
  // desc: 'Description',
};

CardList.propTypes = {
  name: PropTypes.string,
  desc: PropTypes.string,
  href: PropTypes.string,
  button: PropTypes.string,
  children: PropTypes.node
};

export default CardList;
