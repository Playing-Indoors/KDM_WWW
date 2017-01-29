import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getSettlement } from '../../actions/getSettlement';
import SurvivorSurvival from '../../components/Survivor/SurvivorSurvival';

class Survivor extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="boxGroup">
				<SurvivorSurvival
					amount={parseInt(this.props.currentSurvivor.sheet.survival, 10)}
					max={parseInt(this.props.settlementData.sheet.survival_limit, 10)}
				/>
			</div>
		);
	}
}


export default Survivor;
