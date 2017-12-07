import React, { Component } from "react";
import PropTypes from "prop-types";
import { Modal, ModalBody, ModalHeader, ModalFooter, Button } from "reactstrap";
import { Link } from "react-router";
import _isEqual from "lodash/isEqual";
import Stat from "../../components/Stats/Stats";
import Icon from "../../components/Icon/Icon";
import LoadingSaving from "../../components/LoadingSaving/LoadingSaving";
import { addInnovation, removeInnovation } from "../../actions/innovations";

class Innovations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      settlementOid: window.location.pathname.split("/")[2],
      title: "Innovations",
      list: this.props.list,
      showModal: false,
      selectValue: "",
      stagedAdd: [],
      stagedRemove: [],
      isSaving: false
    };
    this.handleInnovationRemove = this.handleInnovationRemove.bind(this);
    this.handleInnovationSelect = this.handleInnovationSelect.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      list: [...nextProps.list]
    });
  }
  handleInnovationRemove(index) {
    const list = [...this.state.list];
    const value = list.splice(index, 1)[0];
    this.setState({
      isSaving: true,
      list,
      stagedRemove: [...this.state.stagedRemove, value]
    });
    this.removeFromInnovation(value).then(res => {
      this.setState({
        isSaving: false
      });
      console.log(res);
    });
  }
  handleInnovationSelect(event) {
    const value = event.target.value;
    const list = [...this.state.list, value].sort();
    this.setState({
      isSaving: true,
      list,
      stagedAdd: [...this.state.stagedAdd, value]
    });
    this.addToInnovation(value).then(res => {
      this.setState({
        isSaving: false
      });
      console.log(res);
    });
  }

  addToInnovation(i) {
    let userId = localStorage.getItem("userId");
    let data = {
      user_id: userId,
      handle: i
    };
    let settlementId = window.location.pathname.split("/")[2];
    return addInnovation(settlementId, data);
  }
  removeFromInnovation(i) {
    let userId = localStorage.getItem("userId");
    let data = {
      user_id: userId,
      handle: i
    };
    let settlementId = window.location.pathname.split("/")[2];
    return removeInnovation(settlementId, data);
  }
  handleModalConfirm() {
    this.setState({
      isSaving: true
    });
    const addPromises = this.state.stagedAdd.map(i => this.addToInnovation(i));
    const removePromises = this.state.stagedRemove.map(i =>
      this.removeFromInnovation(i)
    );
    Promise.all([...addPromises, ...removePromises]).then(res => {
      console.log(res);
      this.handleModalToggle();
      this.setState({
        isSaving: false
      });
    });
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
  render() {
    return (
      <div className="layout">
        <div className={"widget"}>{this.renderModalBody()}</div>
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
