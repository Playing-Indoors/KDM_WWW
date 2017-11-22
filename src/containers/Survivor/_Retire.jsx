import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import { Button } from "reactstrap";
import { setAttributes } from "../../actions/attributes";
import Widget from "../../components/Widget/Widget";
import WidgetFooter from "../../components/Widget/WidgetFooter";

class Retired extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
      showModal: false
    };
    // Binding Events
    this.handleSave = this.handleSave.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      value: nextProps.value
    });
  }
  // Handle's the save and makes the API Call
  handleSave() {
    const userId = localStorage.getItem("userId");
    const data = {
      user_id: userId,
      retired: !this.state.value
    };
    // TODO: Khoa create setRetired action
    // /survivor/set_retired/<survivor_id>
    this.props.setRetired(this.props.oid, data).catch(() => {
      this.resetData();
    });
  }
  confirmColor() {
    if (this.state.value === this.props.value) {
      return "light";
    }
    return "primary";
  }
  renderButton() {
    if (!this.state.value) {
      return (
        <Button color={"danger"} size="sm" onClick={this.handleSave}>
          Force Retirement
        </Button>
      );
    }
    return (
      <Button color={"primary"} size="sm" onClick={this.handleSave}>
        Bring out of Retirement
      </Button>
    );
  }
  // Renders our component
  render() {
    return <Widget className="grid-full">{this.renderButton()}</Widget>;
  }
}

Retired.propTypes = {
  oid: PropTypes.string,
  value: PropTypes.bool
};

Retired.defaultProps = {
  oid: "",
  value: false
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      setAttributes
    },
    dispatch
  );
}

export default connect(null, mapDispatchToProps)(Retired);
