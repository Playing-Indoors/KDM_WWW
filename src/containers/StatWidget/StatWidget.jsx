import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";

export let StatWidget = ComposedComponent =>
  class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        // title: props.title,
        stats: props.stats,
        description: props.description,
        showModal: false
      };
    }
    handleModal() {
      this.setState({
        showModal: !this.state.showModal
      });
    }

    render() {
      return (
        <div className="box">
          <header className="box-header">
            <div className="box-header-title">{this.state.title}</div>
          </header>
          <button
            onClick={() => {
              this.handleModal();
            }}
            type="button"
            className="box-content"
          >
            <div className="statGroup">
              <ComposedComponent {...this.props} />
            </div>
          </button>
          <Modal
            isOpen={this.state.showModal}
            toggle={() => {
              this.handleModal();
            }}
          >
            <ModalHeader
              toggle={() => {
                this.handleModal();
              }}
            >
              {this.state.title}
            </ModalHeader>
            <ModalBody>
              <div className="statSpendGroup">test</div>
            </ModalBody>
            <ModalFooter>
              <Button
                onClick={() => {
                  this.handleModal(false);
                }}
              >
                Cancel
              </Button>
              <Button color="primary">Confirm</Button>
            </ModalFooter>
          </Modal>
        </div>
      );
    }
  };

// StatWidget.propTypes = {
//   title: PropTypes.string.isRequired,
//   stats: PropTypes.arrayOf(PropTypes.string).isRequired,
//   description: PropTypes.string,
// };
