import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from '../../components/Icon/Icon';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateHeader } from '../../actions/updateHeader';
import { browserHistory } from 'react-router';
// TODO: handle button clicks.

class Header extends Component {
	constructor(props){
		super(props);
		this.handleNav = this.handleNav.bind(this);
	}
	handleNav(){
		browserHistory.goBack();
	}
	renderName(){
		if(this.props.superSubName){
			return `${this.props.superSubName}`;
		} else if (this.props.subName){
			return `${this.props.subName}`;
		} else {
			return `${this.props.name}`;
		}
	}
	render(){
		return (
			<header className="header">
				{/* Only show this if back is activated */}
				<a tabIndex="0" className="header-action header-action--nav" onClick={this.handleNav}>
					<Icon name="nav" />
				</a>
				<div className="header-title">
					{this.renderName()}
				</div>
				<a className="header-action">
					<Icon name="help" />
				</a>
				<a className="header-action">
					<Icon name="gear" />
				</a>
			</header>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		updateHeader: updateHeader
	}, dispatch);
}

Header.defaultProps = {
	name: 'Page Title',
};

Header.propTypes = {
	name: PropTypes.string,
	subName: PropTypes.string,
};

export default connect(null, mapDispatchToProps)(Header);
