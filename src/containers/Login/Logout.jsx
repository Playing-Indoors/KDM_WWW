import React, { Component } from "react";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

class Logout extends Component {
  componentDidMount() {
    localStorage.clear();
    this.context.router.push("/");
  }
  render() {
    return <LoadingSpinner />;
  }
}

Logout.contextTypes = {
  router: React.PropTypes.object
};

export default Logout;
