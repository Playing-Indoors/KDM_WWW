import React, { Component } from 'react';
import Icon from '../../components/Icon/Icon';

// remember to change the class name as well
class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <header className="header">
        {/* @Khoa - This button when clicked needs to toggle a is-active state on .mainNav .
          This handles mobile nav.  */}
        {/* @Caleb - Make this nav into icons */}
        <a href="#nav" className="header-navToggle" role="button" title="Open Nav">
          <Icon icon="logo-mark" color="#D6A237" />
        </a>
        <div className="header-title">Campaigns</div>
        <div className="header-actions">
          <a href="#help"><i className="fa fa-fw fa-question-circle-o" /></a>
          <a href="#config"><i className="fa fa-fw fa-gear" /></a>
          <a href="#menu"><i className="fa fa-fw fa-ellipsis-v" /></a>
        </div>
      </header>
    )
  }
}

export default Header;
