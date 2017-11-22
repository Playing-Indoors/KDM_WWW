import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import { Button } from "reactstrap";
import { setAttributes } from "../../actions/attributes";
import Widget from "../../components/Widget/Widget";
import WidgetFooter from "../../components/Widget/WidgetFooter";

function checkEmail(email, list) {
  return list.indexOf(email) !== -1;
}

class Status extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
      options: [
        "cannot_spend_survival",
        "cannot_use_fighting_arts",
        "skip_next_hunt",
        "departing"
      ]
    };
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
      user_email: "email@email.com"
    };
    // TODO: Khoa create setStatus action
    // /survivor/add_Status/<survivor_id>
    // /survivor/rm_Status/<survivor_id>
    this.props.setStatus(this.props.oid, data).catch(() => {
      this.resetData();
    });
  }
  renderButton() {
    if (!this.state.value) {
      return (
        <Button color={"primary"} size="sm" onClick={this.handleSave}>
          Mark as Status
        </Button>
      );
    }
    return (
      <Button color={"primary"} size="sm" onClick={this.handleSave}>
        Remove Status
      </Button>
    );
  }
  // Renders our component
  render() {
    return <Widget className="grid-full">{this.renderButton()}</Widget>;
  }
}

Status.propTypes = {
  oid: PropTypes.string,
  value: PropTypes.arrayOf(PropTypes.string)
};

Status.defaultProps = {
  oid: "",
  value: []
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
