import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getSettlement } from '../../actions/getSettlement';
import StatSurvival from '../../containers/StatWidget/StatWidget-Survival';
import Survival from '../../components/Survivor/Survivor-Survival';

class Survivor extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
			return (
				<div className="page-world">
					<main className="main">
						<div className="boxGroup">
							{this.props.currentSurvivor.sheet.survival}
							{/* API changed some of these types, checking with Tim */}
							<Survival
								amount={parseInt(this.props.currentSurvivor.sheet.survival, 10)}
								max={parseInt(this.props.settlementData.sheet.survival_limit, 10)}
							/>
						</div>
						{/* <StatSurvival /> */}
					</main>
				</div>
			);
		}
}


export default Survivor;
