import React, { Component } from "react";
import { Link, browserHistory } from "react-router";

class ExtraLinks extends Component {
  constructor(props) {
    super(props);
    this.handleNav = this.handleNav.bind(this);
  }
  handleNav(e, link) {
    e.preventDefault();
    console.log(e);
    browserHistory.replace(link);
  }
  render() {
    const url = `/settlements/${this.props.params.oid}/survivors/${this.props
      .params.survivorId}`;
    return (
      <div className="headerModal-links">
        <Link to={`${url}/log`} onClick={e => this.handleNav(e, `${url}/log`)}>
          View Log
        </Link>
        <Link
          to={`${url}/favorite`}
          onClick={e => this.handleNav(e, `${url}/favorite`)}
        >
          Make Favorite
        </Link>
        <Link
          to={`${url}/name`}
          onClick={e => this.handleNav(e, `${url}/name`)}
        >
          Rename
        </Link>
        <Link to={`${url}/sex`} onClick={e => this.handleNav(e, `${url}/sex`)}>
          Gender Swap
        </Link>
        <Link
          to={`${url}/cursed`}
          onClick={e => this.handleNav(e, `${url}/cursed`)}
        >
          Manage Cursed Gear
        </Link>
        <Link
          to={`${url}/retire`}
          onClick={e => this.handleNav(e, `${url}/retire`)}
        >
          Force Retirement
        </Link>
        <Link
          to={`${url}/kill`}
          onClick={e => this.handleNav(e, `${url}/kill`)}
        >
          Kill Survivor
        </Link>
      </div>
    );
  }
}
export default ExtraLinks;
