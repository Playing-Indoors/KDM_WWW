import React, { Component } from 'react';
import PropTypes from 'prop-types';

// remember to change the class name as well
class Banner extends Component {
	render() {
		return (
			<div className="banner">
				{this.props.message}
			</div>
		);
	}
}

Banner.propTypes = {
	message: PropTypes.string,
};

export default Banner;
