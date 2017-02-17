import React from 'react';
import Icon from '../../components/Icon/Icon';

// TODO: handle button clicks.

function Header(props) {
	return (
		<header className="header">
			<a className="header-action">
				<Icon name="nav" />
			</a>
			<div className="header-title">{props.name}</div>
			<a className="header-action">
				<Icon name="gear" />
			</a>
			<a className="header-action">
				<Icon name="help" />
			</a>
		</header>
	);
}

Header.defaultProps = {
	name: 'Page Title',
};

Header.propTypes = {
	name: React.PropTypes.string,
};

export default Header;
