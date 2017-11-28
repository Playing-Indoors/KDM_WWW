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

class Arts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      survivorList: props.survivorList,
      toggleModal: false,
      title: "Fighting Arts",
      limit: 3,
      selectValue: ""
    };
    // Binding Events
    this.handleCancel = this.handleCancel.bind(this);
    this.handleConfirm = this.handleConfirm.bind(this);
    this.handleModal = this.handleModal.bind(this);
    this.handleArtSelect = this.handleArtSelect.bind(this);
    this.handleArtDeselect = this.handleArtDeselect.bind(this);
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
    console.warn("Saving Fighting Arts for survivor oid", this.props.oid);
    let userId = localStorage.getItem("userId");
    //TODO: CALEB ADD DATA HEREEEEE
    //change "crossarm_block" with value
    let data = {
      user_id: userId,
      handle: "crossarm_block",
      type: "fighting_arts"
    };
    setAssets(this.props.oid, data)
      .then(res => {
        this.handleModal();
      })
      .catch(err => {
        console.log("Error:  ", err);
      });
  }
  handleArtSelect(event) {
    let newSurvivorList = [...this.state.survivorList, event.target.value];
    newSurvivorList.sort();
    newSurvivorList = _sortedUniq(newSurvivorList);
    this.setState({
      selectValue: "",
      survivorList: newSurvivorList
    });
  }
  handleArtDeselect(index) {
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
    const arts = Object.entries(this.props.settlementList);
    return arts.map(art => (
      <option value={art[0]} key={art[0]}>
        {art[1].name}
      </option>
    ));
  }
  renderSurvivorList() {
    return this.state.survivorList.map((art, index) => (
      <div className="btnDeselect" key={art}>
        {art}
        <Button
          color="danger"
          size="small"
          onClick={() => this.handleArtDeselect(index)}
        >
          <Icon name="minus" size="12" />
        </Button>
      </div>
    ));
  }
  renderAddArt() {
    if (this.state.survivorList.length < this.state.limit) {
      return (
        <div className="btnSelect">
          <label className="btn btn-gray btn-block" htmlFor="btnSelect">
            <Icon name="plus" size="12" />
          </label>
          <select
            id="btnSelect"
            onChange={this.handleArtSelect}
            value={this.state.selectValue}
          >
            <option disabled value="">
              Select Fighting Art
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
        {this.renderAddArt()}
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
        myClass={"survivorArts"}
      >
        <TextList list={this.props.survivorList} minimum={this.props.limit} />
        {this.renderModalBody()}
        {this.renderModalFooter()}
      </WidgetVariant>
    );
  }
}

Arts.propTypes = {
  survivorList: PropTypes.arrayOf(PropTypes.string),
  settlementList: PropTypes.shape(),
  limit: PropTypes.number,
  oid: PropTypes.string
};

Arts.defaultProps = {
  settlementList: {},
  survivorList: [],
  limit: 3,
  oid: ""
};

export default Arts;
