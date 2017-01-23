import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getSettlement } from '../../actions/getSettlement';
import Survivor from '../Survivor/Survivor.jsx';
import _ from 'underscore';

class SurvivorHome extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			settlementData: null,
			survivorData: null,
			currentSurvivor: null
		};
	}
	componentDidMount() {
		this.props.getSettlement();
	}
	componentWillReceiveProps(nextProps) {
		if (nextProps.settlementData) {
			this.setState({
				settlementData: nextProps.settlementData,
				survivorData: nextProps.settlementData.user_assets.survivors
			});
		}
	}
	loadSurvivor(id){
		let arr = _.filter(this.state.survivorData, (survivor) => {
			if(survivor.sheet._id.$oid === id){
				return survivor;
			}
		});
		this.setState({
			currentSurvivor: arr[0]
		})
	}
	renderSurvivorLinks(){
		return this.state.survivorData.map((survivor, l)=>{
			return <button key={l} onClick={this.loadSurvivor.bind(this, survivor.sheet._id.$oid)}>{survivor.sheet._id.$oid}</button>
		});
	}
	render() {
		if (this.state.settlementData) {
			return (
				<div>
					{this.renderSurvivorLinks()}
					{this.state.currentSurvivor ? <Survivor currentSurvivor={this.state.currentSurvivor} /> : null}
				</div>
			);
		}
		return null;
	}
}

function mapStateToProps(state) {
	return {
		settlementData: state.settlementData,
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		getSettlement,
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SurvivorHome);
