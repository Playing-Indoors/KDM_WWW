import React from 'react';
import Icon from '../../components/Icon/Icon';

// TODO: handle button clicks.

function handleMenu() {
	// replace window.showNav with redux
	window.showNav = true;
	document.getElementsByClassName('mainNav')[0].className += 'is-active';
}

function Header(props) {
	return (
		<header className="header">
			<button onClick={handleMenu} className="header-action">
				<Icon name="nav" />
			</button>
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
