import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { browserHistory } from "react-router";
import PropTypes from "prop-types";
import { Button, ModalBody, ModalHeader, ModalFooter } from "reactstrap";
import { setSex } from "../../../actions/attributes";
import LoadingSaving from "../../../components/LoadingSaving/LoadingSaving";

class SexChange extends Component {
  constructor(props) {
    super(props);
    this.state = {
      survivorId: "",
      originalValue: "",
      value: "F",
      isSaving: false
    };
    this.handleClose = this.handleClose.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }
  componentWillMount() {
    this.prepareComponentState(this.props);
  }
  componentWillReceiveProps(nextProps) {
    this.prepareComponentState(nextProps);
  }
  prepareComponentState(props) {
    const newState = {};
    if (props.params && props.params.survivorId && props.settlementData) {
      const survivorId = props.params.survivorId;
      newState.survivorId = survivorId;

      const survivor = props.settlementData.user_assets.survivors.find(
        item => item.sheet._id.$oid === survivorId
      );
      newState.value = survivor.sheet.sex;
      newState.originalValue = survivor.sheet.sex;
    }
    this.setState({
      ...newState
    });
  }
  handleChange(e) {
    this.setState({ value: e.target.value });
  }
  handleClose() {
    console.warn(browserHistory);
    browserHistory.replace(
      `/settlements/${this.props.params.oid}/survivors/${this.props.params
        .survivorId}`
    );
  }
  // Handle's the save and makes the API Call
  handleSave() {
    if (this.checkModified()) {
      const userId = localStorage.getItem("userId");
      const data = {
        user_id: userId,
        sex: this.state.value
      };
      this.setState({ isSaving: true });
      // TODO: Khoa create setSex action
      // /survivor/set_sex/<survivor_id>
      this.props
        .setSex(this.state.survivorId, data)
        .then(() => {
          this.handleClose();
        })
        .catch(err => {
          this.setState({ isSaving: false });
          console.warn("error", err);
        });
    } else {
      this.handleClose();
    }
  }
  checkModified() {
    return this.state.value !== this.state.originalValue;
  }
  render() {
    if (this.state.isSaving) {
      return <LoadingSaving />;
    }
    return (
      <div>
        <ModalHeader>Change Sex</ModalHeader>
        <ModalBody>
          <select
            className="form-control-sm form-control"
            value={this.state.value}
            onChange={this.handleChange}
          >
            <option value="M">Male</option>
            <option value="F">Female</option>
          </select>
        </ModalBody>
        <ModalFooter>
          <Button
            color={this.checkModified() ? "primary" : "light"}
            onClick={this.handleSave}
          >
            Change Sex
          </Button>
          <Button onClick={this.handleClose} color="link">
            Cancel
          </Button>
        </ModalFooter>
      </div>
    );
  }
}

SexChange.propTypes = {
  oid: PropTypes.string,
  value: PropTypes.string
};

SexChange.defaultProps = {
  oid: "",
  value: ""
};

function mapStateToProps(state) {
  return {
    settlementData: state.settlementData
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      setSex
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(SexChange);
