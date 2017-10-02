import React, { Component } from "react";

class Storage extends Component {
  render() {
    return (
      <div>
        Why is this repeated twice
        {this.props.children}
      </div>
    );
  }
}

export default Storage;
