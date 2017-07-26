import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import Icon from '../../components/Icon/Icon';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { closeHeader } from '../../actions/updateHeader';

class Nav extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showNav: false,
			activeIndex: null,
			initialIndex: null,
		};
		this.handleCloseNav = this.handleCloseNav.bind(this);
	}
	componentDidMount() {
		this.calculateIndex();
	}
	componentWillReceiveProps(nextProps) {
		if (nextProps.headerData) {
			this.setState({
				showNav: nextProps.headerData.showNav,
			});
		}
	}
	handleCloseNav() {
		this.props.closeHeader();
	}
	renderMainNav() {
		return this.props.data.map((item, index) =>
			<li data-i={index} key={index} className="nav-item">
				<Link
					className="nav-link"
					activeClassName="active"
					to={item.link}
				>
					<div className="nav-link-icon">
						<Icon name={item.icon} />
					</div>
					<div className="nav-link-text">{item.title}</div>
				</Link>
			</li>,
		);
	}
	render() {
		return (
			<nav className="mainNav">
				<ol className="nav nav-fill">
					{this.renderMainNav()}
				</ol>
			</nav>
		);
	}
}

Nav.propTypes = {
	data: PropTypes.arrayOf(PropTypes.object),
};

function mapStateToProps(state) {
	return {
		headerData: state.headerData,
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		closeHeader,
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps, null, {
	pure: false,
})(Nav);
