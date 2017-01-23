import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getWorld } from '../../actions/getWorld';
import { getSettlement } from '../../actions/getSettlement';
// import { getSurvivor } from '../../actions/getSurvivor';
import StatSurvival from '../../containers/StatWidget/StatWidget-Survival';

class World extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			worldData: null,
			settlementData: null,
			// survivalData: null,
		};
	}
	componentDidMount() {
		this.props.getWorld(); // eslint-disable-line react/prop-types
		this.props.getSettlement(); // eslint-disable-line react/prop-types
		// this.props.getSurvivor(); // eslint-disable-line react/prop-types
	}
	componentWillReceiveProps(nextProps) {
		if (nextProps.worldData) {
			this.setState({
				worldData: nextProps.worldData,
			});
		}
		if (nextProps.survivorData) {
			this.setState({
				survivorData: nextProps.survivorData,
			});
		}
		if (nextProps.settlementData) {
			this.setState({
				settlementData: nextProps.settlementData,
			});
		}
	}
	render() {
		if (this.state.settlementData) {
			return (
				<div className="page-world">
					<main className="main">

						<div className="boxGroup">
							<StatSurvival />
						</div>
						{this.state.settlementData.user_assets.survivors[0].sheet.Survival}
					</main>
				</div>
			);
		}
		return null;
	}
}

function mapStateToProps(state) {
	return {
		worldData: state.worldData,
		// survivorData: state.survivorData,
		settlementData: state.settlementData,
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		getWorld,
		getSettlement,
		// getSurvivor,
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(World);
