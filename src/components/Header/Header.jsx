import React, { Component } from 'react';

// remember to change the class name as well
class Header extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <header className="header">
        <div className="header-title">Campaigns</div>
        <div className="header-actions">
          <a href="#"> <i className="fa fa-fw fa-question-circle-o"></i></a>
          <a href="#"><i className="fa fa-fw fa-gear"></i></a>
          <a href="#"><i className="fa fa-fw fa-ellipsis-v"></i></a>
        </div>
      </header>
    )
  }
}

export default Header;
