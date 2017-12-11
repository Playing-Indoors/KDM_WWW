import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { browserHistory } from "react-router";
import PropTypes from "prop-types";
import { Button, ModalBody, ModalHeader, ModalFooter } from "reactstrap";
import { setAttributes } from "../../../actions/attributes";
import { addCursedItem, rmCursedItem } from "../../../actions/cursedItems";
import Icon from "../../../components/Icon/Icon";
import LoadingSaving from "../../../components/LoadingSaving/LoadingSaving";

class CursedItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      survivorId: "",
      items: [], // Current survivors items
      assets: [], // Settlement's cursed items lookup
      selectValue: "",
      isSaving: false
    };
    // Binding Events
    this.handleItemAdd = this.handleItemAdd.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }
  componentWillMount() {
    this.prepareComponentState(this.props);
  }
  componentWillReceiveProps(nextProps) {
    this.prepareComponentState(nextProps);
  }
  prepareComponentState(props) {
    const newState = {};
    if (props.params && props.params.survivorId && props.settlementData) {
      const survivorId = props.params.survivorId;
      newState.survivorId = survivorId;

      const survivor = props.settlementData.user_assets.survivors.find(
        item => item.sheet._id.$oid === survivorId
      );
      newState.items = survivor.sheet.cursed_items;
      newState.assets = props.settlementData.game_assets.cursed_items;
    }
    this.setState({
      ...newState
    });
  }
  handleListRemove(index) {
    const items = [...this.state.items];
    const value = items.splice(index, 1)[0];
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
        this.props.rmCursedItem(this.state.survivorId, data).then(() => {
          this.setState({ isSaving: false });
        });
      }
    );
  }
  handleItemAdd(event) {
    const newList = [...this.state.items, event.target.value];
    const userId = localStorage.getItem("userId");
    const data = {
      user_id: userId,
      handle: event.target.value
    };
    newList.sort();
    this.setState(
      {
        isSaving: true,
        selectValue: "",
        items: newList
      },
      () => {
        this.props.addCursedItem(this.state.survivorId, data).then(() => {
          this.setState({ isSaving: false });
        });
      }
    );
    // Add API CALL
  }
  handleClose() {
    browserHistory.push(
      `/settlements/${this.props.params.oid}/survivors/${this.props.params
        .survivorId}`
    );
  }
  renderAvailableList() {
    const assets = Object.entries(this.state.assets);
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
    if (!this.state.isSaving) {
      return (
        <div className="btnSelect">
          <label
            className="btn btn-gray btn-block"
            htmlFor={`survivor-add-item`}
          >
            <Icon name="plus" size={12} />
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
    return null;
  }
  renderCursedList() {
    return this.state.items.map((cursed, index) => (
      <div className="btnDeselect mb-4" key={cursed}>
        {this.state.assets[cursed].name}
        <Button
          color="danger"
          size="small"
          onClick={() => this.handleListRemove(index)}
        >
          <Icon name="trash" size={16} />
        </Button>
      </div>
    ));
  }
  // Renders our component
  render() {
    if (this.state.isSaving) {
      return <LoadingSaving />;
    }
    return (
      <div>
        <ModalHeader>Cursed Items</ModalHeader>
        <ModalBody>
          {this.renderCursedList()}
          {this.renderAddItem()}
        </ModalBody>
        <ModalFooter>
          <Button onClick={this.handleClose} color="primary">
            Close
          </Button>
        </ModalFooter>
      </div>
    );
  }
}

CursedItems.propTypes = {
  rmCursedItem: PropTypes.func,
  addCursedItem: PropTypes.func
  // oid: PropTypes.string,
  // assets: PropTypes.shape(),
  // items: PropTypes.arrayOf(PropTypes.string)
};

CursedItems.defaultProps = {
  // oid: "",
  // items: []
};

function mapStateToProps(state) {
  return {
    settlementData: state.settlementData
  };
}

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

export default connect(mapStateToProps, mapDispatchToProps)(CursedItems);
