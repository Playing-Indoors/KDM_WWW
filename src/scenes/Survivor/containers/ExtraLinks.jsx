import React, { Component } from "react";
import { Link } from "react-router";

class ExtraLinks extends Component {
  render() {
    const url = `/settlements/${this.props.params.oid}/survivors/${
      this.props.params.survivorId
    }`;
    return (
      <div className="headerModal-links">
        <Link>View Log</Link>
        <Link to={`${url}/favorite`}>Make Favorite</Link>
        <Link to={`${url}/name`}>Rename</Link>
        <Link to={`${url}/sex`}>Gender Swap</Link>
        <Link to={`${url}/cursed`}>Manage Cursed Gear</Link>
        <Link to={`${url}/retire`}>Force Retirement</Link>
        <Link to={`${url}/kill`}>Kill Survivor</Link>
      </div>
    );
  }
}
export default ExtraLinks;
