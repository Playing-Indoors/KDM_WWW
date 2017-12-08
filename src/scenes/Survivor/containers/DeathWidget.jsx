import React, { Component } from "react";
import { Link } from "react-router";
import TextList from "../../../components/TextList/TextList";

class DeathWidget extends Component {
  // Renders our component
  render() {
    if (this.props.dead) {
      return (
        <div className={"widget survivorDead"}>
          <Link
            to={`/settlements/${this.props.settlement}/survivors/${this.props
              .survivorId}/kill`}
            className="widget-content text-center"
          >
            Dead
          </Link>
        </div>
      );
    }
    return null;
  }
}

DeathWidget.defaultProps = {
  dead: false
};

export default DeathWidget;
