import React, { Component } from 'react';

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
	message: React.PropTypes.string,
};

export default Banner;
