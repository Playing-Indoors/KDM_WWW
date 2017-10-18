import React, { Component } from "react";
import PropTypes from "prop-types";
import { ModalFooter, Button, Input } from "reactstrap";
import _sortBy from "lodash/sortBy";
import _sortedUniq from "lodash/sortedUniq";
import _isEqual from "lodash/isEqual";
import Icon from "../../components/Icon/Icon";
import TextList from "../../components/TextList/TextList";
import CardList from "../../components/CardList/CardList";
import WidgetVariant from "../../components/Widget/WidgetVariant";
import Widget from "../../components/Widget/Widget";

class Assets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      survivorList: props.survivorList,
      toggleModal: false,
      selectValue: ""
    };
    // Binding Events
    this.handleCancel = this.handleCancel.bind(this);
    this.handleConfirm = this.handleConfirm.bind(this);
    this.handleModalToggle = this.handleModalToggle.bind(this);
    this.handleAbilitySelect = this.handleAbilitySelect.bind(this);
    this.handleAbilityDeselect = this.handleAbilityDeselect.bind(this);
  }
  // Controls opening up the modal
  handleModalToggle() {
    this.setState({
      toggleModal: !this.state.toggleModal
    });
  }
  // Cancel event from the modal, reset the state.
  handleCancel() {
    this.setState({
      survivorList: this.props.survivorList
    });
    this.handleModalToggle();
  }
  // Handle's the save and makes the API Call
  handleConfirm() {
    // TODO: KHOA SAVE THIS SHIT.
    console.warn("Saving Assets for survivor oid", this.props.oid);
    this.handleModalToggle();
  }
  handleAbilitySelect(event) {
    let newSurvivorList = [...this.state.survivorList, event.target.value];
    newSurvivorList.sort();
    if (!this.props.duplicates) {
      console.log("no no duplicates");
      newSurvivorList = _sortedUniq(newSurvivorList);
    }
    this.setState({
      selectValue: "",
      survivorList: newSurvivorList
    });
  }
  handleAbilityDeselect(index) {
    this.setState(prevState => ({
      survivorList: prevState.survivorList.filter((_, i) => i !== index)
    }));
  }
  renderAssetLookup(handle, attribute) {
    const asset = this.props.assetList[handle];
    if (asset) {
      return asset[attribute];
    }
    return null;
  }
  // We pass the confirm function into the modal so that we have a pending state
  renderConfirm() {
    if (_isEqual(this.state.survivorList, this.props.survivorList)) {
      return (
        <Button color="light" onClick={this.handleConfirm}>
          Confirm
        </Button>
      );
    }
    return (
      <Button color="primary" onClick={this.handleConfirm}>
        Confirm
      </Button>
    );
  }
  renderAvailableList() {
    const assets = Object.entries(this.props.assetList);
    return assets.map(ability => {
      if (ability[1].type === this.props.type) {
        return (
          <option value={ability[0]} key={ability[0]}>
            {ability[1].name}
          </option>
        );
      }
      return null;
    });
  }
  renderSurvivorList() {
    return this.state.survivorList.map((ability, index) => (
      <div className="btnDeselect" key={`${ability}${index}`}>
        {this.renderAssetLookup(ability, "name")}
        <Button
          color="danger"
          size="small"
          onClick={() => this.handleAbilityDeselect(index)}
        >
          <Icon name="minus" size="12" />
        </Button>
      </div>
    ));
  }
  renderAddAbility() {
    if (this.state.survivorList.length < this.props.maximum) {
      return (
        <div className="btnSelect">
          <label
            className="btn btn-gray btn-block"
            htmlFor={`survivor-add-${this.type}`}
          >
            <Icon name="plus" size="12" />
          </label>
          <select
            id={`survivor-add-${this.type}`}
            onChange={this.handleAbilitySelect}
            value={this.state.selectValue}
          >
            <option disabled value="">
              Select Ability
            </option>
            {this.renderAvailableList()}
          </select>
        </div>
      );
    }
    return null;
  }
  // Controls what shows inside of the modal
  renderModalBody() {
    return (
      <div className="layout">
        {this.renderSurvivorList()}
        {this.renderAddAbility()}
      </div>
    );
  }
  // Controls the functionality of modal footer buttons
  renderModalFooter() {
    return (
      <ModalFooter>
        {this.renderConfirm()}
        <Button onClick={this.handleCancel} color="link">
          Cancel
        </Button>
      </ModalFooter>
    );
  }
  render() {
    return (
      <WidgetVariant
        title={this.props.name}
        toggleModal={this.state.toggleModal}
        myClass={`survivor-${this.props.type}`}
      >
        <TextList
          list={this.props.survivorList}
          minimum={this.props.placeholderNumber}
        />
        {this.renderModalBody()}
        {this.renderModalFooter()}
      </WidgetVariant>
    );
  }
}

Assets.defaultProps = {
  name: "",
  type: "",
  survivorList: [],
  assetList: {},
  placeholderNumber: 1,
  maximum: 999,
  duplicates: false,
  oid: ""
};

Assets.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  survivorList: PropTypes.arrayOf(PropTypes.string),
  assetList: PropTypes.shape(),
  placeholderNumber: PropTypes.number,
  maximum: PropTypes.number,
  duplicates: PropTypes.bool,
  oid: PropTypes.string
};

export default Assets;
