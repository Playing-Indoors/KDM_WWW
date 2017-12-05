import React, { Component } from "react";
import { Link } from "react-router";

class CursedItemsWidget extends Component {
  renderCursedList() {
    return this.props.items.map((cursed, index) => (
      <div key={cursed}>{this.props.assets[cursed].name}</div>
    ));
  }
  // Renders our component
  render() {
    if (this.props.items.length !== 0) {
      return (
        <div className={"widget survivorCursed"}>
          <header className={"widget-header widget-header--link"}>
            <div className="widget-header-title">Cursed Gear</div>
          </header>
          <Link
            to={`/settlements/${this.props.settlement}/survivors/${
              this.props.survivorId
            }/cursed`}
            className="widget-content"
          >
            {this.renderCursedList()}
          </Link>
        </div>
      );
    }
    return null;
  }
}

CursedItemsWidget.defaultProps = {
  list: []
};

export default CursedItemsWidget;
