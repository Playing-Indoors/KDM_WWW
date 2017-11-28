import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import { Button, Select } from "reactstrap";
import { setSex } from "../../actions/attributes";
import Widget from "../../components/Widget/Widget";
import WidgetFooter from "../../components/Widget/WidgetFooter";

class Sex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
      showModal: false
    };
    // Binding Events
    this.handleChange = this.handleChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      value: nextProps.value
    });
  }
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
    this.props.setSex(this.props.oid, data);
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

Sex.propTypes = {
  oid: PropTypes.string,
  value: PropTypes.string
};

Sex.defaultProps = {
  oid: "",
  value: ""
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      setSex
    },
    dispatch
  );
}

export default connect(null, mapDispatchToProps)(Sex);
