import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getWorld } from '../../actions/getWorld';
import Stat from '../../components/Stats/Stats';
import StatGroup from '../../components/Stats/StatGroup';
import StatGroupObj from '../../components/Stats/StatGroupObj';
import BoxList from '../../components/BoxList/BoxList';
import Survival from '../../components/Survivor/Survival';
import SurvivorXP from '../../components/Survivor/Survivor-XP';

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
							<StatGroupObj statObj={this.state.survivorData.mock.survival} />
							<StatGroupObj statObj={this.state.survivorData.mock.bleeding} />
							<StatGroupObj statObj={this.state.survivorData.mock.xp} />
						</div>
						<div className="boxGroup">
							<StatGroupObj statObj={this.state.survivorData.mock.primaryStats} />
						</div>
						<div className="boxGroup">
							<StatGroupObj statObj={this.state.survivorData.mock.armor} />
						</div>

						<div className="boxGroup">
							<div className="box">
								<header className="box-header">
									<div className="box-header-title">Fighting Arts</div>
								</header>
								<div className="box-content">
									<div className="statGroup">
										<BoxList list={this.state.survivorData.fighting_arts} />
									</div>
								</div>
							</div>
							<div className="box">
								<header className="box-header">
									<div className="box-header-title">Disorders</div>
								</header>
								<div className="box-content">
									<div className="statGroup">
										<BoxList list={this.state.survivorData.disorders} />
									</div>
								</div>
							</div>
						</div>

						<div className="boxGroup">
							<div className="box">
								<header className="box-header">
									<div className="box-header-title">Abilities</div>
								</header>
								<div className="box-content">
									<div className="statGroup">
										<BoxList list={this.state.survivorData.abilities_and_impairments} />
									</div>
								</div>
							</div>
						</div>

						<div className="boxGroup">
							<div className="box">
								<header className="box-header">
									<div className="box-header-title">Impairments</div>
								</header>
								<div className="box-content">
									<div className="statGroup">
										<BoxList list={this.state.survivorData.abilities_and_impairments} />
									</div>
								</div>
							</div>
						</div>

						<div className="boxGroup">
							<div className="box">
								<header className="box-header">
									<div className="box-header-title">Additional Notes</div>
								</header>
								<div className="box-content">
									<div className="statGroup">
										<BoxList list={this.state.survivorData.abilities_and_impairments} />
									</div>
								</div>
							</div>
						</div>

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
		settlementData: state.settlementData,
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		getWorld
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(World);
