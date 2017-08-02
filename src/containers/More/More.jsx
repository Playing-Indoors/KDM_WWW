import React from 'react';
import { Link } from 'react-router';

class More extends React.Component {
	render() {
		return (
			<div>
				<h1>Username</h1>
				[INSERT WATCHER LOGO]
				<h3>Current Campaign</h3>
				<h1>Campaign Name</h1>

				<Link to={'/campaigns'}>Campaigns</Link>
				<Link to={'/resources'}>Glossary/FAQ</Link>
				<Link to={'/settings'}>Settings</Link>
				<Link to={'/logout'}>Log Out</Link>
			</div>
		);
	}
}

export default More;
