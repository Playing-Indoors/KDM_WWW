import React from 'react';
import {connect} from 'react-redux';
import {getHome} from '../../actions/getHome';
import {bindActionCreators} from 'redux';
import { getWorld } from '../../actions/getWorld.js';

class World extends React.Component {
	constructor(props) {
		super(props);
	}
	componentWillMount(){
		this.props.getWorld();
	}
	render() {
			return (
				<div className="page-home">
					<p>This is the world page</p>
				</div>
			);
	}
}

function mapStateToProps(state) {
	return {worldData: state.worldData};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		getWorld: getWorld
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(World);
