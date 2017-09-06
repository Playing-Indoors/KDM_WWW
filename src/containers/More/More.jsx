import React from 'react';
import { Link } from 'react-router';
import { createSettlement } from '../../actions/getSettlement';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class More extends React.Component {
	constructor(props){
		super(props);
		this._handleAddSettlement = this._handleAddSettlement.bind(this);
	}

	_handleAddSettlement(){
		this.props.createSettlement();
	}

	render() {
		return (
			<div>
				<button onClick={this._handleAddSettlement}>add settlement</button>
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

function mapStateToProps(state) {
	return {
		settlementData: state.settlementData,
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		createSettlement,
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(More);
