import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getSettlement } from '../../actions/getSettlement';
import StatSurvival from '../../containers/StatWidget/StatWidget-Survival';

class Survivor extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
			return (
				<div className="page-world">
					<main className="main">

						<div className="boxGroup">
							{/* <StatSurvival /> */}
						</div>
						{this.props.currentSurvivor.sheet.survival}
					</main>
				</div>
			);
		}
}


export default Survivor;
