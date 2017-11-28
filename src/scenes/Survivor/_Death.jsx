import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import { Button, Input } from "reactstrap";
import { setAttributes } from "../../actions/attributes";
import Widget from "../../components/Widget/Widget";
import WidgetFooter from "../../components/Widget/WidgetFooter";

class Death extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
      text: "",
      showModal: false
    };
    // Binding Events
    this.handleTextInput = this.handleTextInput.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      value: nextProps.value
    });
  }
  handleTextInput(event) {
    this.setState({ text: event.target.value });
  }
  // Handle's the save and makes the API Call
  handleSave() {
    const userId = localStorage.getItem("userId");
    const data = {
      user_id: userId
    };
    if (this.state.value) {
      data.dead = false;
    } else {
      data.dead = true;
      data.died_in = this.props.year;
      data.cause_of_death = this.state.text;
    }
    // TODO: Khoa create setDeath action
    // /survivor/set_Death/<survivor_id>
    this.props.setDeath(this.props.oid, data).catch(() => {
      this.resetData();
    });
  }
  renderText() {
    if (!this.state.value) {
      return (
        <Input
          type="text"
          placeholder="Enter cause of death..."
          value={this.state.text}
          size="sm"
          className="mb-3"
          onChange={this.handleTextInput}
        />
      );
    }
    return null;
  }
  renderButton() {
    if (!this.state.value) {
      return (
        <Button color={"danger"} size="sm" onClick={this.handleSave}>
          Kill Survivor
        </Button>
      );
    }
    return (
      <Button color={"primary"} size="sm" onClick={this.handleSave}>
        Resurrect Survivor
      </Button>
    );
  }
  // Renders our component
  render() {
    return (
      <Widget className="grid-full">
        {this.renderText()}
        {this.renderButton()}
      </Widget>
    );
  }
}

Death.propTypes = {
  oid: PropTypes.string,
  value: PropTypes.bool
};

Death.defaultProps = {
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

export default connect(null, mapDispatchToProps)(Death);
