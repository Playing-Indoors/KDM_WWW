import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

// TODO
// [ ] Better format this so that the width doesn't change on increment/decrement
// [ ] Add support for H, L

class NumberIncrement extends Component {
  // Calls our parent function to change the amount
  handleAmountChange(amount) {
    const newAmount = this.props.amount + amount;
    this.props.updateAmount(newAmount);
  }
  // Makes sure we can increase the amount
  handleCanIncrease() {
    const isLess = this.props.amount < this.props.max;
    return isLess && this.props.canIncrease;
  }
  // Makes sure we can decrease the amount
  handleCanDecrease() {
    const isMore = this.props.amount > this.props.min;
    return isMore && this.props.canDecrease;
  }
  // Renders the amount. Supports special styles
  renderAmount() {
    if (this.props.amount === -1 && this.props.type === "armor") {
      return "L";
    } else if (this.props.amount === -2 && this.props.type === "armor") {
      return "H";
    }
    return this.props.amount;
  }

  render() {
    return (
      <div className="numberIncrement">
        <button
          type="button"
          onClick={() => {
            if (this.props.canDecrease) {
              this.handleAmountChange(-1);
            }
          }}
          className={classNames({
            "numberIncrement-change": true,
            "numberIncrement-change--prevented": !this.props.canDecrease
          })}
          disabled={!this.handleCanDecrease()}
        >
          &ndash;
        </button>
        <div className="numberIncrement-num">{this.renderAmount()}</div>
        <button
          type="button"
          onClick={() => {
            if (this.props.canIncrease) {
              this.handleAmountChange(1);
            }
          }}
          className={classNames({
            "numberIncrement-change": true,
            "numberIncrement-change--prevented": !this.props.canIncrease
          })}
          disabled={!this.handleCanIncrease()}
        >
          +
        </button>
        <div className="numberIncrement-title">{this.props.name}</div>
      </div>
    );
  }
}

NumberIncrement.defaultProps = {
  name: "",
  amount: 0,
  canDecrease: true,
  canIncrease: true,
  min: -999,
  max: 999
};

NumberIncrement.propTypes = {
  name: PropTypes.string,
  amount: PropTypes.number,
  canDecrease: PropTypes.bool,
  canIncrease: PropTypes.bool,
  min: PropTypes.number,
  max: PropTypes.number,
  updateAmount: PropTypes.func.isRequired
  // milestones: PropTypes.arrayOf(PropTypes.string),
};

export default NumberIncrement;
