import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import { Button, Select } from "reactstrap";
import { setAttributes } from "../../../actions/attributes";
import Widget from "../../../components/Widget/Widget";
import WidgetFooter from "../../../components/Widget/WidgetFooter";

class SexChange extends Component {
  constructor(props) {
    super(props);

    const survivorId = props.params.survivorId;
    const survivor = props.settlementData.user_assets.survivors.find(
      item => item.sheet._id.$oid === survivorId
    );

    this.state = {
      survivorId,
      value: survivor.sheet.sex
    };
    // Binding Events
    this.handleChange = this.handleChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }
  // componentDidMount() {
  //   console.warn(this.props.settlementData);
  //   this.setState({
  //     survivorId: this.params.survivorId
  //   })
  // }
  handleChange(e) {
    this.setState({ value: e.target.value });
  }
  // Handle's the save and makes the API Call
  handleSave() {
    const userId = localStorage.getItem("userId");
    const data = {
      user_id: userId,
      sex: this.state.value
    };
    // TODO: Khoa create setSex action
    // /survivor/set_sex/<survivor_id>
    this.props.setSex(this.props.oid, data).catch(() => {
      this.resetData();
    });
  }
  confirmColor() {
    if (this.state.value === this.props.value) {
      return "light";
    }
    return "primary";
  }
  // Renders our component
  render() {
    return (
      <Widget className="grid-full">
        <select
          className="form-control-sm form-control"
          value={this.state.value}
          onChange={this.handleChange}
        >
          <option value="M">Male</option>
          <option value="F">Female</option>
        </select>
        <WidgetFooter>
          <Button
            color={this.confirmColor()}
            size="sm"
            onClick={this.handleSave}
          >
            Change Sex
          </Button>
        </WidgetFooter>
      </Widget>
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
      setAttributes
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(SexChange);
