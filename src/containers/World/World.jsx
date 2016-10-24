import React from 'react';
import {connect} from 'react-redux';
import {getHome} from '../../actions/getHome';
import {bindActionCreators} from 'redux';
import { getWorld } from '../../actions/getWorld.js';
import TugGraph from '../../components/TugGraph/TugGraph.jsx';

class World extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			worldData: null
		}
	}
	componentWillMount(){
		this.props.getWorld();
	}
	componentWillReceiveProps(nextProps){
		console.log(nextProps.worldData);
		if(nextProps.worldData){
			this.setState({
				worldData: nextProps.worldData
			});
		}
	}
	render() {
		if(this.state.worldData){
			return (
				<div className="page-world">
					<main className="main">
						<div className="widgetGroup">Global Totals</div>
						<div className="widget">
							<TugGraph title="Campaign" aLabel="Active" aValue="985" bLabel="Ended" bValue="46"/>
						</div>
						{this.state.worldData.world.active_settlements.value}
					</main>
				</div>
			);
		} else {
			return null;
		}
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
