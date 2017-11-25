import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import { Button } from "reactstrap";
import { setAttributes } from "../../actions/attributes";
import Toggle from "../../components/Toggle/Toggle";
import Widget from "../../components/Widget/Widget";
import WidgetFooter from "../../components/Widget/WidgetFooter";

class Status extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value
    };
    this.toggleValue = this.toggleValue.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      value: nextProps.value
    });
  }
  // Handle's the save and makes the API Call
  toggleValue() {
    const toggled = !this.state.value;
    this.setState({ value: toggled });
    const userId = localStorage.getItem("userId");
    const data = {
      user_id: userId,
      flag: this.props.flag,
      unset: toggled
    };
    // TODO: Khoa create setStatus action
    // /survivor/set_status_flag/<survivor_id>
    // We also need to set redux with this value
    // this.state.survivor.sheet[this.props.flag] = toggled
    this.props.setStatus(this.props.oid, data).catch(() => {
      this.resetData();
    });
  }
  render() {
    return (
      <Toggle
        updateToggle={this.toggleValue}
        for={this.props.flag}
        active={this.state.value}
        label={this.props.label}
      />
    );
  }
}

Status.propTypes = {
  oid: PropTypes.string,
  value: PropTypes.bool,
  label: PropTypes.string,
  flag: PropTypes.string
};

Status.defaultProps = {
  oid: "",
  value: false,
  label: "",
  flag: ""
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      setAttributes
    },
    dispatch
  );
}

export default connect(null, mapDispatchToProps)(Status);
