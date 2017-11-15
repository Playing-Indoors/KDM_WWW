import React, { Component } from "react";
import PropTypes from "prop-types";
import { Modal, ModalBody, ModalHeader, ModalFooter, Button } from "reactstrap";
import _isEqual from "lodash/isEqual";
import Stat from "../../components/Stats/Stats";
import Icon from "../../components/Icon/Icon";
import LoadingSaving from "../../components/LoadingSaving/LoadingSaving";

class Innovations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Innovations",
      list: this.props.list,
      showModal: false,
      selectValue: "",
      isSaving: false
    };
    this.handleModalToggle = this.handleModalToggle.bind(this);
    this.handleModalConfirm = this.handleModalConfirm.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleInnovationRemove = this.handleInnovationRemove.bind(this);
    this.handleInnovationSelect = this.handleInnovationSelect.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      list: [...nextProps.list]
    });
  }
  // Toggles the visibility of the modal
  handleModalToggle() {
    this.setState({
      showModal: !this.state.showModal
    });
  }
  // Cancel event from the modal, reset the state.
  handleCancel() {
    this.handleModalToggle();
  }
  handleInnovationRemove(index) {
    const list = [...this.state.list];
    list.splice(index, 1);
    this.setState({ list });
  }
  handleInnovationSelect(event) {
    const value = event.target.value;
    console.warn("add", value);
    const list = [...this.state.list, value].sort();
    this.setState({ list });
  }
  handleModalConfirm() {
    // TODO: KHOA
    const userId = localStorage.getItem("userId");
    const data = {
      user_id: userId,
      type: this.props.apiType
    };

    const addInnovations = ["hovel", "ammonia", "bed"];
    const removeInnovations = ["cooking", "language", "lantern_oven"];

    // Convert this to a promise.all
    addInnovations.forEach(i => {
      // Api call
      const data = { handle: i };
      console.warn(
        `hptt://api.thewatcher.com/settlement/add_innovation/${this.props.oid}`,
        data
      );
    });

    // Convert this to a promise.all
    removeInnovations.forEach(i => {
      // Api call
      const data = { handle: i };
      console.warn(
        `hptt://api.thewatcher.com/settlement/rm_innovation/${this.props.oid}`,
        data
      );
    });

    // Success
  }
  confirmColor() {
    if (_isEqual(this.state.list, this.props.list)) {
      return "light";
    }
    return "primary";
  }
  renderInnovationList() {
    return this.state.list.map((innovation, index) => (
      <div className="btnDeselect" key={innovation}>
        {this.props.assets[innovation].name}
        <Button
          color="danger"
          size="small"
          onClick={() => this.handleInnovationRemove(index)}
        >
          <Icon name="trash" size="16" />
        </Button>
      </div>
    ));
  }
  renderAvailableList() {
    const assets = Object.entries(this.props.assets);
    return assets.map(innovation => {
      // if (innovation.type === "innovation") {
      if (this.state.list.indexOf(innovation[0]) === -1) {
        return (
          <option value={innovation[0]} key={innovation[0]}>
            {innovation[1].name}
          </option>
        );
      }
      return null;
    });
  }
  renderAddInnovation() {
    return (
      <div className="btnSelect">
        <label
          className="btn btn-gray btn-block"
          htmlFor={`survivor-add-innovation}`}
        >
          <Icon name="plus" size="12" />
        </label>
        <select
          id={`survivor-add-innovation`}
          onChange={this.handleInnovationSelect}
          value={this.state.selectValue}
        >
          <option disabled value="">
            Select Innovation
          </option>
          {this.renderAvailableList()}
        </select>
      </div>
    );
  }
  // Controls what shows inside of the modal
  renderModalBody() {
    if (this.state.isSaving) {
      return <LoadingSaving />;
    }
    return (
      <div className="layout">
        {this.renderInnovationList()}
        {this.renderAddInnovation()}
      </div>
    );
  }
  // Controls the functionality of modal footer buttons
  renderModalFooter() {
    if (this.state.isSaving) {
      return null;
    }
    return (
      <ModalFooter>
        <Button color={this.confirmColor()} onClick={this.handleModalConfirm}>
          Confirm
        </Button>
        <Button onClick={this.handleCancel} color="link">
          Cancel
        </Button>
      </ModalFooter>
    );
  }
  // Renders our component
  render() {
    return (
      <div className={"widget"}>
        <header className={"widget-header widget-header--link"}>
          <div className="widget-header-title">{this.state.title}</div>
        </header>
        <button
          type="button"
          className="widget-content"
          onClick={this.handleModalToggle}
        >
          <Stat amount={this.props.list.length} />
        </button>
        <Modal isOpen={this.state.showModal} toggle={this.handleCancel}>
          <ModalHeader>{this.state.title}</ModalHeader>
          <ModalBody>{this.renderModalBody()}</ModalBody>
          {this.renderModalFooter()}
        </Modal>
      </div>
    );
  }
}

Innovations.propTypes = {
  // assets: PropTypes.shapeOf(),
  list: PropTypes.arrayOf(PropTypes.string),
  oid: PropTypes.string
};

Innovations.defaultProps = {
  list: [],
  oid: ""
};

export default Innovations;
