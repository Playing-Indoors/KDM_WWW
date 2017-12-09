import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button } from "reactstrap";
import Icon from "../../components/Icon/Icon";
import CardListMeta from "../../components/CardList/CardListMeta";
import { Link, browserHistory } from "react-router";

class CardList extends Component {
  renderButton() {
    if (this.props.action) {
      return (
        <div className="cardList-button">
          <Button onClick={this.props.action} color="gray">
            Play
          </Button>
        </div>
      );
    }
    return null;
  }
  renderIcon(name) {
    if (name.length > 0) {
      return <Icon name={name} />;
    }
    return null;
  }
  renderDesc() {
    if (this.props.desc.length > 0) {
      return (
        <div
          className="cardList-desc"
          dangerouslySetInnerHTML={{ __html: this.props.desc }}
        />
      );
    }
    return null;
  }
  renderMetaItems() {
    return this.props.meta.map((item, index) => (
      <CardListMeta label={item.label} value={item.value} key={index} />
    ));
  }
  renderMeta() {
    if (this.props.meta.length > 0) {
      return <div className="cardList-meta">{this.renderMetaItems()}</div>;
    }
    return null;
  }
  render() {
    if (this.props.href.length > 0) {
      return (
        <Link to={this.props.href} className="cardList">
          <div className="cardList-content">
            <div className="cardList-header">
              {this.renderIcon(this.props.iconLeft)}
              <div className="cardList-header-name">{this.props.name}</div>
              {this.renderIcon(this.props.iconRight)}
            </div>
            {this.renderDesc()}
            {this.renderMeta()}
          </div>
        </Link>
      );
    }
    return (
      <div className="cardList">
        <div className="cardList-content">
          <div className="cardList-header">
            {this.renderIcon(this.props.iconLeft)}
            <div className="cardList-header-name">{this.props.name}</div>
            {this.renderIcon(this.props.iconRight)}
          </div>
          {this.renderDesc()}
          {this.renderMeta()}
        </div>
        {this.renderButton()}
      </div>
    );
  }
}

CardList.defaultProps = {
  name: "",
  desc: "",
  meta: [],
  children: [],
  href: "",
  iconLeft: "",
  iconRight: ""
  // desc: 'Description',
};

CardList.propTypes = {
  action: PropTypes.func,
  name: PropTypes.string,
  desc: PropTypes.string,
  href: PropTypes.string,
  meta: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    })
  ),
  iconLeft: PropTypes.string,
  iconRight: PropTypes.string
};

export default CardList;
