import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import { Button, Input } from "reactstrap";
import { setAttributes } from "../../actions/attributes";
import NumberIncrement from "../../components/NumberIncrement/NumberIncrement";
import Stat from "../../components/Stats/Stats";
import Widget from "../../components/Widget/Widget";
import WidgetFooter from "../../components/Widget/WidgetFooter";
import MilestoneDots from "../../components/MilestoneDots/MilestoneDots";

class XP extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      showModal: false
    };
    // Binding Events
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleNameSave = this.handleNameSave.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      name: nextProps.name
    });
  }
  handleNameChange() {
    const userId = localStorage.getItem("userId");
    const data = {
      user_id: userId,
      attribute: "hunt_xp",
      value: this.state.amount
    };
    // this.props.setAttributes(this.props.oid, data).catch(() => {
    //   this.resetData();
    // });
  }
  // Handle's the save and makes the API Call
  handleNameSave() {
    const userId = localStorage.getItem("userId");
    const data = {
      user_id: userId,
      attribute: "hunt_xp",
      value: this.state.amount
    };
    // this.props.setAttributes(this.props.oid, data).catch(() => {
    //   this.resetData();
    // });
  }
  confirmColor() {
    if (this.state.name === this.props.name) {
      return "light";
    }
    return "primary";
  }
  // Renders our component
  render() {
    return (
      <Widget className="grid-full">
        <Input
          value={this.state.name}
          type="text"
          name="name"
          placeholder="Enter survivor name..."
          size="sm"
          autoFocus
          required
          onChange={this.handleNameChange}
        />
        <WidgetFooter>
          <Button
            color={this.confirmColor()}
            size="sm"
            onClick={this.handleNameSave}
          >
            Rename
          </Button>
        </WidgetFooter>
      </Widget>
    );
  }
}

XP.propTypes = {
  oid: PropTypes.string,
  name: PropTypes.string
};

XP.defaultProps = {
  oid: "",
  name: ""
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      setAttributes
    },
    dispatch
  );
}

export default connect(null, mapDispatchToProps)(XP);
