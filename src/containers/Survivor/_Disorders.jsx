import React, { Component } from "react";
import PropTypes from "prop-types";
import { ModalFooter, Button } from "reactstrap";
import TextList from "../../components/TextList/TextList";
import WidgetVariant from "../../components/Widget/WidgetVariant";

class Disorders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: props.list,
      toggleModal: false,
      title: "Disorders"
    };
    // Binding Events
    this.handleCancel = this.handleCancel.bind(this);
    this.handleConfirm = this.handleConfirm.bind(this);
    this.handleModal = this.handleModal.bind(this);
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
      list: this.props.list
    });
    this.handleModal();
  }
  // Handle's the save and makes the API Call
  handleConfirm() {
    // TODO: KHOA SAVE THIS SHIT.
    console.warn("Saving Disorders for survivor oid", this.props.oid);
    this.handleModal();
  }
  // We pass the confirm function into the modal so that we have a pending state
  renderConfirm() {
    // Disable confirm unless we've changed data
    if (this.state.amount === this.props.amount) {
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
  // Controls what shows inside of the modal
  renderModalBody() {
    return <div>Select Disorders</div>;
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
        <TextList list={this.props.list} minimum={this.props.minimum} />
        {this.renderModalBody()}
        {this.renderModalFooter()}
      </WidgetVariant>
    );
  }
}

Disorders.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string),
  minimum: PropTypes.number,
  oid: PropTypes.string
};

Disorders.defaultProps = {
  list: [],
  minimum: 3,
  oid: ""
};

export default Disorders;
