import React from 'react';

// TODO
// - Make it so that you can pass a link/action if you click on it
// - If this is true then change the color of the header

const Widget = ({ title, children }) => (
	<div className="widget">
		<header className="widget-header">
			<div className="widget-header-title">{title}</div>
		</header>
		<div className="widget-content">
			{ children }
		</div>
	</div>
);

Widget.propTypes = {
	title: React.PropTypes.string,
	children: React.PropTypes.node,
};

export default Widget;
