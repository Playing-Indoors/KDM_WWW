import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import { Button, Select } from "reactstrap";
import { setAttributes } from "../../actions/attributes";
import Widget from "../../components/Widget/Widget";
import WidgetFooter from "../../components/Widget/WidgetFooter";

class CursedItems extends Component {
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
      CursedItems: this.state.value
    };
    // TODO: Khoa create setCursedItems action
    // /survivor/set_CursedItems/<survivor_id>
    this.props.setCursedItems(this.props.oid, data).catch(() => {
      this.resetData();
    });
  }
  confirmColor() {
    if (this.state.value === this.props.value) {
      return "light";
    }
    return "primary";
  }
  renderOptions() {
    Object.keys(this.props.assets).map(i => {
      console.warn(i);
      return <option>test</option>;
    });
  }
  // Renders our component
  render() {
    return (
      <Widget title={"Cursed Items"} className="grid-full">
        <select
          className="form-control-sm form-control"
          value={this.state.value}
          onChange={this.handleChange}
        >
          {this.renderOptions()}
        </select>
        <WidgetFooter>
          <Button
            color={this.confirmColor()}
            size="sm"
            onClick={this.handleSave}
          >
            Change CursedItems
          </Button>
        </WidgetFooter>
      </Widget>
    );
  }
}

CursedItems.propTypes = {
  oid: PropTypes.string,
  assets: PropTypes.shape,
  items: PropTypes.array
};

CursedItems.defaultProps = {
  oid: "",
  items: []
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      setAttributes
    },
    dispatch
  );
}

export default connect(null, mapDispatchToProps)(CursedItems);
