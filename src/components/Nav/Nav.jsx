import React, { Component } from 'react';
import { Link } from 'react-router';
import Icon from '../../components/Icon/Icon';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class Nav extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showNav: false,
			// activeSubNav: false,
			activeIndex: 0,
		};
		this.handleMainNav = this.handleMainNav.bind(this);
		this.handleCloseNav = this.handleCloseNav.bind(this);
	}
	componentWillReceiveProps(nextProps) {
		if (nextProps.headerData.showNav) {
			this.setState({
				showNav: true,
			});
		}
	}
	handleMainNav(idx, e) {
		e.preventDefault();
		// this.state.activeSubNav = true;
		this.state.activeIndex = idx;
		this.setState({
			// activeSubNav: true,
			activeIndex: idx,
		});
	}
	handleCloseNav() {
		this.setState({
			showNav: false,
		});
	}
	renderSubNav(index, title, children) {
		// if (!this.state.activeSubNav || index !== this.state.activeIndex) {
		if (index !== this.state.activeIndex) {
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
					<Link to={item.link} className="subNav-link" activeClassName="is-active">{item.title}</Link>
				</li>
			);
		});
	}
	renderNavClose() {
		if (this.state.showNav) {
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
			<nav className={`mainNav ${this.state.showNav ? 'is-active' : ''}`}>
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

function mapStateToProps(state) {
	return {
		headerData: state.headerData,
	};
}

export default connect(mapStateToProps, null)(Nav);
