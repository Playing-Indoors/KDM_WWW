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

class Favorite extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: checkEmail("email@email.com", props.value)
    };
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      value: checkEmail("email@email.com", nextProps.value)
    });
  }
  // Handle's the save and makes the API Call
  handleSave() {
    const userId = localStorage.getItem("userId");
    const data = {
      user_id: userId,
      user_email: "email@email.com"
    };
    // TODO: Khoa create setFavorite action
    // /survivor/add_favorite/<survivor_id>
    // /survivor/rm_favorite/<survivor_id>
    this.props.setFavorite(this.props.oid, data).catch(() => {
      this.resetData();
    });
  }
  renderButton() {
    if (!this.state.value) {
      return (
        <Button color={"primary"} size="sm" onClick={this.handleSave}>
          Mark as Favorite
        </Button>
      );
    }
    return (
      <Button color={"primary"} size="sm" onClick={this.handleSave}>
        Remove Favorite
      </Button>
    );
  }
  // Renders our component
  render() {
    return <Widget className="grid-full">{this.renderButton()}</Widget>;
  }
}

Favorite.propTypes = {
  oid: PropTypes.string,
  value: PropTypes.arrayOf(PropTypes.string)
};

Favorite.defaultProps = {
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

export default connect(null, mapDispatchToProps)(Favorite);
