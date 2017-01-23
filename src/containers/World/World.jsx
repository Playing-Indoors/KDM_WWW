import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getHome } from '../../actions/getHome';
import { getWorld } from '../../actions/getWorld';
import { getSettlement } from '../../actions/getSettlement';
import { getSurvivor } from '../../actions/getSurvivor';
import TugGraph from '../../components/TugGraph/TugGraph';
import Stat from '../../components/Stats/Stats';
import StatGroup from '../../components/Stats/StatGroup';
import BoxList from '../../components/BoxList/BoxList';
import Survival from '../../components/Survivor/Survival';
import SurvivorXP from '../../components/Survivor/Survivor-XP';

class World extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			worldData: null,
			settlementData: null,
			survivalData: null,
		};
	}
	componentDidMount() {
		this.props.getWorld();
		this.props.getSettlement();
		//this.props.getSurvivor();
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
		if (this.state.worldData) {
			return (
				<div className="page-world">
					<main className="main">

						<div className="widgetGroup">Global Totals</div>

						<div className="widget">
							<TugGraph title="Settlements" aLabel="Active" aValue={this.state.worldData.world.active_settlements.value} bLabel="Ended" bValue={this.state.worldData.world.abandoned_settlements.value} />
						</div>

						<div className="widget">
							<TugGraph title="Survivors" aLabel="Alive" aValue={this.state.worldData.world.live_survivors.value} bLabel="Dead" bValue={this.state.worldData.world.dead_survivors.value} />
						</div>
						<div className="widget">
							{this.state.worldData.world.total_users.value}
							{this.state.worldData.world.total_users.name}
							<br />
							{this.state.worldData.world.total_users_last_30.value}
							{this.state.worldData.world.total_users_last_30.name}
							<br />
							{this.state.worldData.world.avg_user_survivors.value}
							{this.state.worldData.world.avg_user_survivors.name}
							{this.state.worldData.world.avg_user_survivors.comment}
							<br />
							{this.state.worldData.world.avg_user_settlements.value}
							{this.state.worldData.world.avg_user_settlements.name}
						</div>

						<div className="widgetGroup">Settlements</div>
						<div className="widget">
							{this.state.worldData.world.avg_ly.value}
							{this.state.worldData.world.avg_ly.name}
							<br />
							{this.state.worldData.world.avg_expansions.value}
							{this.state.worldData.world.avg_expansions.name}
							<br />
							{this.state.worldData.world.avg_storage.value}
							{this.state.worldData.world.avg_storage.name}
							<br />
							{this.state.worldData.world.avg_innovations.value}
							{this.state.worldData.world.avg_innovations.name}
							<br />
							{this.state.worldData.world.avg_defeated_monsters.value}
							{this.state.worldData.world.avg_defeated_monsters.name}
							<br />
							{this.state.worldData.world.avg_milestones.value}
							{this.state.worldData.world.avg_milestones.name}
						</div>
						<div className="widget">
							Population
							{this.state.worldData.world.avg_pop.value}
							{this.state.worldData.world.avg_pop.name}
							<br />
							{this.state.worldData.world.max_pop.value}
							{this.state.worldData.world.max_pop.name}
						</div>
						<div className="widget">
							Death
							{this.state.worldData.world.avg_death_count.value}
							{this.state.worldData.world.avg_death_count.name}
							<br />
							{this.state.worldData.world.max_death_count.value}
							{this.state.worldData.world.max_death_count.name}
						</div>
						<div className="widget">
							Survival
							{this.state.worldData.world.avg_survival_limit.value}
							{this.state.worldData.world.avg_survival_limit.name}
							<br />
							{this.state.worldData.world.max_survival_limit.value}
							{this.state.worldData.world.max_survival_limit.name}
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
		survivorData: state.survivorData,
		settlementData: state.settlementData,
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		getWorld,
		getSettlement,
		getSurvivor,
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(World);
