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
import { setAssets } from "../../actions/abilities";

class Abilities extends Component {
  constructor(props) {
    super(props);
    this.state = {
      survivorList: props.survivorList,
      toggleModal: false,
      title: "Abilities",
      selectValue: ""
    };
    // Binding Events
    this.handleCancel = this.handleCancel.bind(this);
    this.handleConfirm = this.handleConfirm.bind(this);
    this.handleModal = this.handleModal.bind(this);
    this.handleAbilitySelect = this.handleAbilitySelect.bind(this);
    this.handleAbilityDeselect = this.handleAbilityDeselect.bind(this);
  }
  // Controls opening up the modal
  handleModal() {
    this.setState({
      toggleModal: !this.state.toggleModal
    });
  }
  // Cancel event from the modal, reset the state.
  handleCancel() {
    this.setState({
      survivorList: this.props.survivorList
    });
    this.handleModal();
  }
  // Handle's the save and makes the API Call
  handleConfirm() {
    console.warn("Saving Abilities for survivor oid", this.props.oid);
    let userId = localStorage.getItem("userId");
    //TODO: CALEB ADD DATA HEREEEEE
    //change "blind" with value
    let data = {
      user_id: userId,
      handle: "blind",
      type: "abilities_and_impairments"
    };
    setAssets(this.props.oid, data)
      .then(res => {
        this.handleModal();
      })
      .catch(err => {
        console.log("Error:  ", err);
      });
  }
  handleAbilitySelect(event) {
    let newSurvivorList = [...this.state.survivorList, event.target.value];
    newSurvivorList.sort();
    newSurvivorList = _sortedUniq(newSurvivorList);
    this.setState({
      selectValue: "",
      survivorList: newSurvivorList
    });
  }
  handleAbilityDeselect(index) {
    // console.log(index);
    // const newSurvivorList = this.state.survivorList.splice();
    // newSurv(index, 1);
    // this.setState({
    //   survivorList: newSurvivorList
    // });
    this.setState(prevState => ({
      survivorList: prevState.survivorList.filter((_, i) => i !== index)
    }));
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
    const abilities = Object.entries(this.props.settlementList);
    return abilities.map(ability => (
      <option value={ability[0]} key={ability[0]}>
        {ability[1].name}
      </option>
    ));
  }
  renderSurvivorList() {
    return this.state.survivorList.map((ability, index) => (
      <div className="btnDeselect" key={ability}>
        {ability}
        <Button
          color="danger"
          size="small"
          onClick={() => this.handleAbilityDeselect(index)}
        >
          <Icon name="minus" size={12} />
        </Button>
      </div>
    ));
  }
  renderAddAbility() {
    return (
      <div className="btnSelect">
        <label className="btn btn-gray btn-block" htmlFor="btnSelect">
          <Icon name="plus" size={12} />
        </label>
        <select
          id="btnSelect"
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
        title={this.state.title}
        toggleModal={this.state.toggleModal}
        myClass={"survivorAbilities"}
      >
        <TextList list={this.props.survivorList} minimum={this.props.minimum} />
        {this.renderModalBody()}
        {this.renderModalFooter()}
      </WidgetVariant>
    );
  }
}

Abilities.propTypes = {
  survivorList: PropTypes.arrayOf(PropTypes.string),
  settlementList: PropTypes.shape(),
  minimum: PropTypes.number,
  oid: PropTypes.string
};

Abilities.defaultProps = {
  settlementList: {},
  survivorList: [],
  minimum: 1,
  oid: ""
};

export default Abilities;
