import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Modal, ModalBody, ModalHeader, ModalFooter, Button } from "reactstrap";

class WidgetVariant extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: this.props.toggleModal,
      headerClass: classNames({
        "widget-header": true,
        "widget-header--link": this.props.children.length > 1
      })
    };
    this.handleModal = this.handleModal.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.toggleModal !== this.props.toggleModal) {
      this.setState({
        showModal: !this.state.showModal
      });
    }
  }
  handleModal() {
    if (typeof this.props.handleClose === "function") {
      this.props.handleClose();
    }
    this.setState({
      showModal: !this.state.showModal
    });
  }
  renderHeader() {
    if (this.props.title) {
      return (
        <header className={this.state.headerClass}>
          <div className="widget-header-title">{this.props.title}</div>
        </header>
      );
    }
    return null;
  }
  renderContent() {
    if (this.props.children.length > 1) {
      return (
        <button
          type="button"
          className="widget-content"
          onClick={this.handleModal}
        >
          {this.props.children[0]}
        </button>
      );
    }
    return <div className="widget-content">{this.props.children[0]}</div>;
  }
  renderModalClose() {
    if (this.props.children.length > 2) {
      return this.props.children[2];
    }
    return (
      <ModalFooter>
        <Button onClick={this.handleModal} color="link">
          Cancel
        </Button>
      </ModalFooter>
    );
  }
  renderModal() {
    if (this.props.children.length > 1) {
      return (
        <Modal isOpen={this.state.showModal} toggle={this.handleModal}>
          <ModalHeader>Adjust {this.props.title}</ModalHeader>
          <ModalBody>{this.props.children[1]}</ModalBody>
          {this.renderModalClose()}
        </Modal>
      );
    }
    return null;
  }
  render() {
    return (
      <div className={`widget ${this.props.myClass}`}>
        {this.renderHeader()}
        {this.renderContent()}
        {this.renderModal()}
      </div>
    );
  }
}

WidgetVariant.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  toggleModal: PropTypes.bool,
  myClass: PropTypes.string,
  handleClose: PropTypes.func
};

WidgetVariant.defaultProps = {
  title: "",
  toggleModal: false,
  myClass: ""
};

export default WidgetVariant;
