import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button } from "reactstrap";
import Icon from "../../components/Icon/Icon";
import CardListMeta from "../../components/CardList/CardListMeta";
import { Link, browserHistory } from "react-router";

class SurvivorCard extends Component {
  renderIcon(name) {
    if (name.length > 0) {
      return <Icon name={name} />;
    }
    return null;
  }
  renderAttr(attribute) {
    return (
      <div className="survivorCard-attr">
        <div className="survivorCard-attr-name">
          {attribute.substring(0, 3)}
        </div>
        <div className="survivorCard-attr">
          {this.props.survivor[attribute]}
        </div>
      </div>
    );
  }
  render() {
    return (
      <Link to={this.props.href} className="cardList">
        <div className="cardList-content">
          <div className="cardList-header">
            {this.renderIcon(this.props.iconLeft)}
            <div className="cardList-header-name">
              {this.props.survivor.name}
            </div>
            {this.renderIcon(this.props.iconRight)}
          </div>
          <div className="cardList-desc">
            <div className="survivorCard-group">
              {this.renderAttr("hunt_xp")}
              {this.renderAttr("survival")}
              {this.renderAttr("Courage")}
              {this.renderAttr("Understanding")}
              {this.renderAttr("Weapon Proficiency")}
            </div>
            <div className="survivorCard-group">
              {this.renderAttr("Movement")}
              {this.renderAttr("Accuracy")}
              {this.renderAttr("Strength")}
              {this.renderAttr("Evasion")}
              {this.renderAttr("Luck")}
              {this.renderAttr("Speed")}
            </div>
          </div>
        </div>
      </Link>
    );
  }
}

SurvivorCard.defaultProps = {
  survivor: {},
  href: "",
  iconLeft: "",
  iconRight: ""
};

SurvivorCard.propTypes = {
  survivor: PropTypes.shape({}),
  href: PropTypes.string,
  iconLeft: PropTypes.string,
  iconRight: PropTypes.string
};

export default SurvivorCard;
