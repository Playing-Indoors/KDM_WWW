import React, { Component } from "react";
import { Link } from "react-router";

class ExtraLinks extends Component {
  render() {
    const url = `/settlements/${this.props.params.oid}/survivors/${this.props
      .params.survivorId}`;
    return (
      <div className="headerModal-links">
        <Link>View Log</Link>
        <Link>Make Favorite</Link>
        <Link>Rename</Link>
        <Link to={`${url}/sex`}>Gender Swap</Link>
        <Link to={`${url}/cursed`}>Manage Cursed Gear</Link>
        <Link tabIndex="0" onClick={() => this.renderModal("retire")}>
          Force Retirement
        </Link>
        <Link>Kill Survivor</Link>
      </div>
    );
  }
}
export default ExtraLinks;
