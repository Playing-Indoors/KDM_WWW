import React, { Component } from 'react';
import { Link } from 'react-router';
import Icon from '../../components/Icon/Icon';


class Nav extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeSubNav: false,
			activeIndex: 0,
		};
		this.handleMainNav = this.handleMainNav.bind(this);
		this.handleCloseNav = this.handleCloseNav.bind(this);
	}
	handleMainNav(idx, e) {
		e.preventDefault();
		this.state.activeSubNav = true;
		this.state.activeIndex = idx;
		this.setState({
			activeSubNav: true,
			activeIndex: idx,
		});
	}
	handleCloseNav() {
		console.log('close');
		this.setState({
			activeSubNav: false,
		});
	}
	renderSubNav(index, title, children) {
		if (!this.state.activeSubNav || index !== this.state.activeIndex) {
			return null;
		}
		return (
			<div className="subNav">
				<div className="subNav-title">{title}</div>
				<ol>
					{this.renderSubNavChildren(children)}
				</ol>
			</div>
		);
	}
	renderSubNavChildren(children) {
		return children.map((item, index) => {
			return (
				<li key={index}>
					<a href={item.link} className="subNav-link">{item.title}</a>
				</li>
			);
		});
	}
	renderNavClose() {
		if (this.state.activeSubNav) {
			return <div onClick={this.handleCloseNav} className="subNavClose" />;
		}
		return null;
	}
	renderNodes() {
		return this.props.data.map((item, index) => {
			return (
				<li key={index}>
					<Link to={item.link} onClick={(e) => { this.handleMainNav(index, e); }} className="mainNav-link" activeClassName="is-active">
						<div className="mainNav-link-icon">
							<Icon name={item.icon} />
						</div>
						<div className="sr-only">{item.title}</div>
					</Link>
					{this.renderSubNav(index, item.title, item.children)}
				</li>
			);
		});
	}
	render() {
		return (
			// replace window.showNav with redux
			<nav className={`mainNav ${window.showNav ? 'is-active' : ''}`}>
				<ol>
					{this.renderNodes()}
				</ol>
				{this.renderNavClose()}
			</nav>
		);
	}
}

Nav.propTypes = {
	data: React.PropTypes.arrayOf(React.PropTypes.object),
};

export default Nav;
