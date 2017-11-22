import React from "react";
import PropTypes from "prop-types";
import { Button, Row, Col } from "reactstrap";
import Icon from "../../components/Icon/Icon";

/**
 * Simple boolean toggle
 * Hitting the button will change it to true or false
 */
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggle = this.handleToggle.bind(this);
  }
  handleToggle() {
    this.props.updateToggle(!this.props.active, this.props.for);
  }
  renderIcon() {
    if (this.props.active) {
      return <Icon name="check" />;
    }
    return null;
  }
  render() {
    return (
      <div className="toggle">
        <Row noGutters className="align-items-center">
          <Col>
            {/* @Caleb - Convert this to a label */}
            <div className="toggle-label" onClick={this.handleToggle}>
              {this.props.label}
            </div>
          </Col>
          <Col xs="auto">
            {/* @Caleb - convert this to a checkbox */}
            <button
              type="button"
              className={`toggle-btn ${this.props.active ? "is-active" : ""}`}
              onClick={this.handleToggle}
            >
              {this.renderIcon()}
            </button>
          </Col>
        </Row>
      </div>
    );
  }
}

Toggle.propTypes = {
  active: PropTypes.bool,
  label: PropTypes.string
};

export default Toggle;
