import React, { Component } from "react";
import PropTypes from "prop-types";
import { ModalFooter, Button } from "reactstrap";
import NumberIncrement from "../../components/NumberIncrement/NumberIncrement";
import Stat from "../../components/Stats/Stats";
import WidgetVariant from "../../components/Widget/WidgetVariant";

class Innovations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleModal: false,
      title: "Innovations",
      list: this.props.list
    };
    this.updateAmount = this.updateAmount.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleConfirm = this.handleConfirm.bind(this);
    this.handleModal = this.handleModal.bind(this);
  }
  handleModal() {
    this.setState({
      toggleModal: !this.state.toggleModal
    });
  }
  handleCancel() {
    this.setState({
      list: this.props.list
    });
    this.handleModal();
  }
  handleConfirm() {
    // dispatches data to api to save
    this.handleModal();
  }
  updateAmount(amount) {
    console.log(`Amount changed to ${amount}`);
    this.setState({ amount });
  }
  renderConfirm() {
    if (this.state.list === this.props.list) {
      return (
        <Button color="secondary" onClick={this.handleModal}>
          Confirm
        </Button>
      );
    }
    return (
      <Button color="primary" onClick={this.handleModal}>
        Confirm
      </Button>
    );
  }
  renderList() {
    if (this.state.list.length > 0) {
      return this.state.list.map((item, index) => {
        return (
          <div key={index}>
            {item} <button>(x)</button>
          </div>
        );
      });
    }
    return null;
  }
  render() {
    return (
      <WidgetVariant
        title={this.state.title}
        toggleModal={this.state.toggleModal}
        myClass={"innovations"}
      >
        {/* This is in the widget */}
        <Stat amount={this.state.list.length} />
        {/* This is in the modal */}
        <div>
          {this.renderList()}
          <select>
            <option>Select an Innovation</option>
            <option>a</option>
            <option>b</option>
            <option>c</option>
          </select>
        </div>
        <ModalFooter>
          {this.renderConfirm()}
          <Button onClick={this.handleCancel} color="link">
            Cancel
          </Button>
        </ModalFooter>
      </WidgetVariant>
    );
  }
}

Innovations.propTypes = {
  list: PropTypes.array
};

Innovations.defaultProps = {
  list: []
};

export default Innovations;
