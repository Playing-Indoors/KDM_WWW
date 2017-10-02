import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button } from "reactstrap";
import Icon from "../../components/Icon/Icon";
import { Link, browserHistory } from "react-router";
import { setCurrentSettlement } from '../../actions/getUserData';

class CardList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleSetRedirect = this.handleSetRedirect.bind(this);
  }
  // renderMeta() {
  // 	if (this.props.meta) {
  // 		return <div className="cardList-meta">{this.props.meta.join(' | ')}</div>;
  // 	}
  // 	return null;
  // }
  handleSetRedirect(){
      setCurrentSettlement(this.props.id)
        .then(res => {
          console.log('res', res);
        })
        .catch(err => {
          console.log('err', err)
        });
      browserHistory.push(`${this.props.href}`);
  }
  renderButton(){
    if(this.props.setButton){
      return <Button onClick={this.handleSetRedirect}>Play</Button>
    }
  }
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
      <div className="cardList">
        <div className="cardList-header">
          {this.renderIcon(this.props.iconLeft)}
          <div className="cardList-header-name">{this.props.name}</div>
          {this.renderIcon(this.props.iconRight)}
        </div>
        {this.renderDesc()}
        {this.renderMeta()}
        {this.renderButton()}
      </div>
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
