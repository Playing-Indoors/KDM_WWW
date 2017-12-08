import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, ModalBody, ModalHeader, ModalFooter } from "reactstrap";
import { browserHistory } from "react-router";
import { removeFavorite, addFavorite } from "../../../actions/getSurvivor";
import { bindActionCreators } from "redux";

function checkEmail(email, list) {
  return list.indexOf(email) !== -1;
}

class FavoriteToggle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      value: false
    };
    this.handleClose = this.handleClose.bind(this);
    this.handleAddFavorite = this.handleAddFavorite.bind(this);
    this.handleRemoveFavorite = this.handleRemoveFavorite.bind(this);
  }
  componentWillMount() {
    this.prepareComponentState(this.props);
  }
  componentWillReceiveProps(nextProps) {
    this.prepareComponentState(nextProps);
  }
  prepareComponentState(props) {
    const newState = {};
    if (props.userData) {
      newState.email = props.userData.user.login;
    }
    if (props.params && props.params.survivorId && props.settlementData) {
      const survivor = props.settlementData.user_assets.survivors.find(
        item => item.sheet._id.$oid === props.params.survivorId
      );
      newState.value = checkEmail(newState.email, survivor.sheet.favorite);
    }
    this.setState({
      ...newState
    });
  }
  // Handle's the save and makes the API Call
  handleAddFavorite() {
    const userId = localStorage.getItem("userId");
    const data = {
      user_id: userId,
      user_email: this.state.email
    };
    const survivorId = window.location.pathname.split("/")[4];
    this.handleClose();
    this.props.addFavorite(survivorId, data);
  }
  handleRemoveFavorite() {
    const userId = localStorage.getItem("userId");
    const data = {
      user_id: userId,
      user_email: this.state.email
    };
    const survivorId = window.location.pathname.split("/")[4];
    this.handleClose();
    this.props.removeFavorite(survivorId, data);
  }
  handleClose() {
    browserHistory.push(
      `/settlements/${this.props.params.oid}/survivors/${this.props.params
        .survivorId}`
    );
  }
  renderButton() {
    if (!this.state.value) {
      return (
        <Button color={"primary"} onClick={this.handleAddFavorite}>
          Mark as Favorite
        </Button>
      );
    }
    return (
      <Button color={"primary"} onClick={this.handleRemoveFavorite}>
        Remove Favorite
      </Button>
    );
  }
  // Renders our component
  render() {
    return (
      <div>
        <ModalHeader>Manage Favorite</ModalHeader>
        <ModalBody />
        <ModalFooter>
          {this.renderButton()}
          <Button onClick={this.handleClose} color="link">
            Cancel
          </Button>
        </ModalFooter>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    settlementData: state.settlementData,
    userData: state.userData
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      removeFavorite,
      addFavorite
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteToggle);
