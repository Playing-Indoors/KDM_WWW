import React, { Component } from "react";
import PropTypes from "prop-types";

class Select extends Component {
  renderOptions() {
    return this.props.options.map(option => (
      <option
        value={option[this.props.trackBy]}
        key={option[this.props.trackBy]}
      >
        {option[this.props.label]}
      </option>
    ));
  }
  render() {
    return (
      <div className="tw-relative">
        <select
          id={this.props.id}
          className="tw-block tw-appearance-none tw-rounded-none tw-w-full tw-py-2 tw-pl-2 tw-pr-8 tw-bg-gray-dark tw-text-xs tw-text-gray-lightest"
          onChange={this.props.handleChange}
        >
          <option value="">{this.props.placeholder}</option>
          {this.renderOptions()}
        </select>
        <div className="tw-pointer-events-none tw-absolute tw-pin-y tw-pin-r tw-flex tw-items-center tw-px-2 tw-bg-gray tw-text-gray-darker">
          <svg
            className="tw-fill-current tw-h-4 tw-w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>
    );
  }
}

Select.defaultProps = {
  options: [],
  placeholder: ""
};

Select.propTypes = {
  id: PropTypes.string.isRequired,
  trackBy: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape()),
  placeholder: PropTypes.string,
  handleChange: PropTypes.func
};

export default Select;
