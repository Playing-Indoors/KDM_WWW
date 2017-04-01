import React from 'react';

// TODO
// - Make it so that you can pass a link/action if you click on it
// - If this is true then change the color of the header

class Widget extends React.Component {
	renderHeader() {
		if (this.props.title) {
			return (
				<header className="widget-header">
					<div className="widget-header-title">{this.props.title}</div>
				</header>
			);
		}
		return null;
	}
	render() {
		return (
			<div className="widget">
				{this.renderHeader()}
				<div className="widget-content">
					{ this.props.children }
				</div>
			</div>
		);
	}
}

Widget.propTypes = {
	title: React.PropTypes.string,
	event: React.PropTypes.string,
	children: React.PropTypes.node,
};

export default Widget;
