import React, { Component } from "react";
import { Link } from "react-router";
import TextList from "../../../components/TextList/TextList";

class CursedItemsWidget extends Component {
  buildList() {
    return this.props.items.map(cursed => ({
      name: this.props.assets[cursed].name
    }));
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
            to={`/settlements/${this.props.settlement}/survivors/${this.props
              .survivorId}/cursed`}
            className="widget-content"
          >
            <TextList list={this.buildList()} />
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
