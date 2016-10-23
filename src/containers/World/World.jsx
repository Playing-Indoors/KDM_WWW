import React from 'react';
import {connect} from 'react-redux';
import {getHome} from '../../actions/getHome';
import {bindActionCreators} from 'redux';
import { getWorld } from '../../actions/getWorld.js';
import TugGraph from '../../components/Graphs/Tug.jsx';

class World extends React.Component {
	constructor(props) {
		super(props);
	}
	componentWillMount(){
		this.props.getWorld();
	}
	render() {
			return (
				<div className="page-wrold">
					<main className="main">
						<div className="widgetGroup">Global Totals</div>
						<div className="widget">

							<TugGraph title="Campaign" aLabel="Active" aValue="985" bLabel="Ended" bValue="46"
							 />
						</div>

					</main>
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
