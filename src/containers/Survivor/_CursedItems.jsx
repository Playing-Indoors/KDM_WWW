import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import { Button, Select } from "reactstrap";
import { setAttributes } from "../../actions/attributes";
import { addCursedItem, rmCursedItem } from "../../actions/cursedItems";
import Icon from "../../components/Icon/Icon";
import Widget from "../../components/Widget/Widget";
import WidgetFooter from "../../components/Widget/WidgetFooter";

class CursedItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: props.items,
      selectValue: "",
      showModal: false,
      isSaving: false
    };
    // Binding Events
    this.handleItemAdd = this.handleItemAdd.bind(this);
  }
  handleListRemove(index) {
    const items = [...this.state.items];
    const value = items.splice(index, 1)[0];
    const survivorId = this.props.oid;
    const userId = localStorage.getItem("userId");
    const data = {
      user_id: userId,
      handle: value
    };
    this.setState(
      {
        isSaving: true,
        items
      },
      () => {
        this.props.rmCursedItem(survivorId, data);
      }
    );
    // this.removeFromInnovation(value).then(res => {
    //   this.setState({
    //     isSaving: false
    //   });
    //   console.log(res);
    // });
  }
  handleItemAdd(event) {
    const newList = [...this.state.items, event.target.value];
    const survivorId = this.props.oid;
    const userId = localStorage.getItem("userId");
    const data = {
      user_id: userId,
      handle: event.target.value
    };
    newList.sort();
    this.setState(
      {
        selectValue: "",
        items: newList
      },
      () => {
        this.props.addCursedItem(survivorId, data);
      }
    );
    // Add API CALL
  }
  // // Handle's the save and makes the API Call
  // handleSave() {
  //   const userId = localStorage.getItem("userId");
  //   const data = {
  //     user_id: userId,
  //     CursedItems: this.state.value
  //   };
  //   // TODO: Khoa create setCursedItems action
  //   // /survivor/set_CursedItems/<survivor_id>
  //   this.props.setCursedItems(this.props.oid, data).catch(() => {
  //     this.resetData();
  //   });
  // }
  renderAvailableList() {
    const assets = Object.entries(this.props.assets);
    return assets.map(item => {
      if (this.state.items.indexOf(item[0]) === -1) {
        return (
          <option value={item[0]} key={item[0]}>
            {item[1].name}
          </option>
        );
      }
      return null;
    });
  }
  renderAddItem() {
    return (
      <div className="btnSelect">
        <label className="btn btn-gray btn-block" htmlFor={`survivor-add-item`}>
          <Icon name="plus" size="12" />
        </label>
        <select
          id={`survivor-add-item`}
          onChange={this.handleItemAdd}
          value={this.state.selectValue}
        >
          <option disabled value="">
            Add Cursed Gear
          </option>
          {this.renderAvailableList()}
        </select>
      </div>
    );
  }
  renderCursedList() {
    return this.state.items.map((cursed, index) => (
      <div className="btnDeselect mb-4" key={cursed}>
        {this.props.assets[cursed].name}
        <Button
          color="danger"
          size="small"
          onClick={() => this.handleListRemove(index)}
        >
          <Icon name="trash" size="16" />
        </Button>
      </div>
    ));
  }
  // Renders our component
  render() {
    return (
      <Widget title={"Cursed Items"} className="grid-full">
        {this.renderCursedList()}
        {this.renderAddItem()}
      </Widget>
    );
  }
}

CursedItems.propTypes = {
  oid: PropTypes.string,
  assets: PropTypes.shape(),
  items: PropTypes.arrayOf(PropTypes.string)
};

CursedItems.defaultProps = {
  oid: "",
  items: []
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      setAttributes,
      addCursedItem,
      rmCursedItem
    },
    dispatch
  );
}

export default connect(null, mapDispatchToProps)(CursedItems);
