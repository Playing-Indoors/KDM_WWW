import React, { Component } from 'react';
import Icon from '../../components/Icon/Icon';


class Nav extends Component {
	constructor(props) {
		super(props);
	}
	renderNodes() {
		return this.props.data.map((item, index) => {
			return (
				<li key={index}>
					<a href={item.link} className={`mainNav-link ${(item.isActive ? ' is-active' : '')}`}>
						<div className="mainNav-link-icon">
							<Icon icon={item.icon} />
						</div>
						<div className="mainNav-link-text">{item.title}</div>
					</a>
					<div className="subNav">
						<div className="header-title header-title--primary">{item.title}</div>
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
					</div>
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
			</nav>
		);
	}
}

export default Nav;
