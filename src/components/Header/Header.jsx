import React, { Component } from 'react';
import Icon from '../../components/Icon/Icon';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateHeader } from '../../actions/updateHeader';
// TODO: handle button clicks.

class Header extends Component {
	constructor(props){
		super(props);
		this.handleNav = this.handleNav.bind(this);
	}
	handleNav(){
		this.props.updateHeader();
	}
	render(){
		return (
			<header className="header">
				<a className="header-action header-action--nav" onClick={this.handleNav}>
					<Icon name="nav" />
				</a>
				<div className="header-title">{this.props.name}</div>
				<a className="header-action">
					<Icon name="gear" />
				</a>
				<a className="header-action">
					<Icon name="help" />
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
	name: React.PropTypes.string,
};

export default connect(null, mapDispatchToProps)(Header);
