import React, { Component } from 'react';
import Icon from '../../components/Icon/Icon';


class Nav extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeSubNav: false,
			activeIndex: 0,
		};
		this.handleMainNav = this.handleMainNav.bind(this);
		// this.handleCloseNav = this.handleCloseNav.bind(this);
	}
	handleMainNav(idx, e) {
		this.state.activeSubNav = true;
		this.state.activeIndex = idx;
		this.setState({
			activeSubNav: true,
			activeIndex: idx,
		});
	}
	// handleCloseNav() {
	// 	console.log('close');
	// 	this.setState({
	// 		activeSubNav: false,
	// 	});
	// }
	renderSubNav(index, title) {
		if (!this.state.activeSubNav || index !== this.state.activeIndex) {
			return null;
		}
		return (
			// This needs to updated per the children object
			<div className="subNav">
				<div className="subNav-title">{title}</div>
				<ol>
					<li><a href="#campaigns" className="subNav-link is-active">Campaigns</a></li>
					<li><a href="#world-stats" className="subNav-link">World Stats</a></li>
					<li><a href="#user-preferences" className="subNav-link">User Preferences</a></li>
				</ol>
			</div>
		);
	}
	renderNavClose() {
		if (this.state.activeSubNav) {
			// return <div data-onClick={this.handleCloseNav()} className="subNavClose" />;
			return <div className="subNavClose" />;
		}
		return null;
	}
	renderNodes() {
		return this.props.data.map((item, index) => {
			const boundClick = this.handleMainNav.bind(this, index);
			return (
				<li key={index}>
					<a onClick={boundClick} data-href={item.link} className={`mainNav-link ${(item.isActive ? ' is-active' : '')}`}>
						<div className="mainNav-link-icon">
							<Icon name={item.icon} />
						</div>
						<div className="sr-only">{item.title}</div>
					</a>
					{this.renderSubNav(index, item.title, item.children)}
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
				{/*{this.renderNavClose()}*/}
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
