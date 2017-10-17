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

class Disorders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      survivorList: props.survivorList,
      toggleModal: false,
      title: "Disorders",
      limit: 3,
      selectValue: ""
    };
    // Binding Events
    this.handleCancel = this.handleCancel.bind(this);
    this.handleConfirm = this.handleConfirm.bind(this);
    this.handleModal = this.handleModal.bind(this);
    this.handleDisorderSelect = this.handleDisorderSelect.bind(this);
    this.handleDisorderDeselect = this.handleDisorderDeselect.bind(this);
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
    // TODO: KHOA SAVE THIS SHIT.
    console.warn("Saving Disorders for survivor oid", this.props.oid);
    this.handleModal();
  }
  handleDisorderSelect(event) {
    let newSurvivorList = [...this.state.survivorList, event.target.value];
    newSurvivorList.sort();
    newSurvivorList = _sortedUniq(newSurvivorList);
    this.setState({
      selectValue: "",
      survivorList: newSurvivorList
    });
  }
  handleDisorderDeselect(index) {
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
    const disorders = Object.entries(this.props.settlementList);
    return disorders.map(disorder => (
      <option value={disorder[0]} key={disorder[0]}>
        {disorder[1].name}
      </option>
    ));
  }
  renderSurvivorList() {
    return this.state.survivorList.map((disorder, index) => (
      <div className="btnDeselect" key={disorder}>
        {disorder}
        <Button
          color="danger"
          size="small"
          onClick={() => this.handleDisorderDeselect(index)}
        >
          <Icon name="minus" size="12" />
        </Button>
      </div>
    ));
  }
  renderAddDisorder() {
    if (this.state.survivorList.length < this.state.limit) {
      return (
        <div className="btnSelect">
          <label className="btn btn-gray btn-block" htmlFor="btnSelect">
            <Icon name="plus" size="12" />
          </label>
          <select
            id="btnSelect"
            onChange={this.handleDisorderSelect}
            value={this.state.selectValue}
          >
            <option disabled value="">
              Select Disorder
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
        {this.renderAddDisorder()}
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
        myClass={"survivorDisorders"}
      >
        <TextList list={this.props.survivorList} minimum={this.props.limit} />
        {this.renderModalBody()}
        {this.renderModalFooter()}
      </WidgetVariant>
    );
  }
}

Disorders.propTypes = {
  survivorList: PropTypes.arrayOf(PropTypes.string),
  settlementList: PropTypes.shape(),
  limit: PropTypes.number,
  oid: PropTypes.string
};

Disorders.defaultProps = {
  settlementList: {},
  survivorList: [],
  limit: 3,
  oid: ""
};

export default Disorders;
