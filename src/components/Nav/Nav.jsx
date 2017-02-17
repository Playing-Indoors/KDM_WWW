import React, { Component } from 'react';
import Icon from '../../components/Icon/Icon';


class Nav extends Component {
	renderNodes() {
		return this.props.data.map((item, index) => {
			return (
				<li key={index}>
					<a href={item.link} className={`mainNav-link ${(item.isActive ? ' is-active' : '')}`}>
						<div className="mainNav-link-icon">
							<Icon name={item.icon} />
						</div>
						<div className="sr-only">{item.title}</div>
					</a>
				</li>
			);
		});
	}
	render() {
		return (
			<nav className="mainNav">
				<ol>
					{this.renderNodes()}
				</ol>
				{/*<div className="subNav">
					<div className="subNav-title">Dashboard</div>
					<ol>
						<li>
							<a href="#campaigns" className="is-active">Campaigns</a>
							<ol>
								<li><a href="#active">Active</a></li>
								<li><a href="#inactive">Inactive</a></li>
							</ol>
						</li>
						<li><a href="#world-stats">World Stats</a></li>
						<li><a href="#user-preferences">User Preferences</a></li>
					</ol>
				</div>*/}
			</nav>
		);
	}
}

Nav.propTypes = {
	data: React.PropTypes.arrayOf(React.PropTypes.object),
};

export default Nav;
