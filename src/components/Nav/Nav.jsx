import React, { Component } from 'react';

class NotFound extends Component {
  render() {
    var navNodes = this.props.data.map(function(item) {
      return (
        <li>
          <a href="#" className={"mainNav-link" + (item.isActive ? ' is-active' : '')}>
            <div className="mainNav-link-icon">
              {/* TODO: replace this with svg icon */}
              <i className={"fa fa-" + item.icon} aria-hidden="true"></i>
            </div>
            {item.title}
          </a>
          <div className="subNav">
            <ol>
              <li><a href="#" className="is-active">Campaigns</a></li>
              <li><a href="#">Survivors</a></li>
              <li><a href="#">World</a></li>
              <li><a href="#">User Preferences</a></li>
            </ol>
          </div>
        </li>
      );
    });
    return (
      <nav className="mainNav">
        <ol>
          {navNodes}
       </ol>
     </nav>
    )
  }
}

export default NotFound;