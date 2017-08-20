import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../../components/Icon/Icon';

/**
 * Simple Drop Down
 * Enhances the native html select with a custom face
 */
class DropDown extends React.Component {
	renderOptions() {
		if (this.props.options.length === 0) {
			return null;
		}
		return this.props.options.map((item, index) => (
			<option key={index}>{item}</option>
		));
	}
	render() {
		return(
			<div className="dropDown">
				<label className="dropDownLabel"></label>
				<select>
					{ this.renderOptions }
				</select>
			</div>
		);
	}
}

DropDown.propTypes = {
	options: PropTypes.arrayOf(PropTypes.node),
};

DropDown.defaultProps = {
	options: [],
};

export default DropDown;
