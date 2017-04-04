import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SurvivorAbilities from '../../components/Survivor/SurvivorAbilities';
import SurvivorArmor from '../../components/Survivor/SurvivorArmor';
import SurvivorBleeding from '../../components/Survivor/SurvivorBleeding';
import SurvivorDisorders from '../../components/Survivor/SurvivorDisorders';
import SurvivorFightArts from '../../components/Survivor/SurvivorFightArts';
import SurvivorImpairments from '../../components/Survivor/SurvivorImpairments';
import SurvivorNotes from '../../components/Survivor/SurvivorNotes';
import SurvivorStats from '../../components/Survivor/SurvivorStats';
import SurvivorSurvival from '../../components/Survivor/SurvivorSurvival';
import SurvivorXP from '../../components/Survivor/SurvivorXP';

class Survivor extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			settlementData: null,
			survivor: null,
		};
	}
	componentWillReceiveProps(nextProps) {
		if (nextProps.settlementData) {
			let arr = _.filter(nextProps.settlementData.user_assets.survivors, (survivor) => {
				if (survivor.sheet._id.$oid === this.props.routeParams.id){
					return survivor;
				}
			});
			this.setState({
				settlementData: nextProps.settlementData,
				survivor: arr[0],
			});
		}
	}
	render() {
		if (this.state.survivor) {
			return (
				<div>
					<h1 className="text-center">{this.state.survivor.sheet.name}</h1>
					<div className="boxGroup">
						<SurvivorSurvival
							amount={this.state.survivor.sheet.survival}
							max={7}
						/>
						<SurvivorBleeding
							amount={0}
						/>
						{this.state.survivor.sheet.Courage}
						{this.state.survivor.sheet.Understanding}
						{this.state.survivor.sheet['Weapon Proficiency']}
						<SurvivorXP
							amount={this.state.survivor.sheet.hunt_xp}
							max={7}
						/>
					</div>

					<div className="boxGroup">
						{this.state.survivor.sheet.Movement}
						{this.state.survivor.sheet.Accuracy}
						{this.state.survivor.sheet.Strength}
						{this.state.survivor.sheet.Evasion}
						{this.state.survivor.sheet.Luck}
						{this.state.survivor.sheet.Speed}
						<SurvivorStats
							amount={5}
							max={7}
						/>
					</div>

					<div className="boxGroup">
						{this.state.survivor.sheet.Insanity}
						{this.state.survivor.sheet.Head}
						{this.state.survivor.sheet.Arms}
						{this.state.survivor.sheet.Body}
						{this.state.survivor.sheet.Waist}
						{this.state.survivor.sheet.Feet}
						<SurvivorArmor
							amount={5}
							max={7}
						/>
					</div>

					<div className="boxGroup">
						{this.state.survivor.sheet.fighting_arts}
						<SurvivorFightArts
							amount={5}
							max={7}
						/>
						{this.state.survivor.sheet.disorders}
						<SurvivorDisorders
							amount={5}
							max={7}
						/>
					</div>

					<div className="boxGroup">
						{this.state.survivor.sheet.abilities_and_impairments}
						<SurvivorAbilities
							amount={5}
							max={7}
						/>
					</div>

					<div className="boxGroup">
						{this.state.survivor.sheet.abilities_and_impairments}
						<SurvivorImpairments
							amount={5}
							max={7}
						/>
					</div>

					<div className="boxGroup">
						{this.state.survivor.sheet.notes}
						<SurvivorNotes
							amount={5}
							max={7}
						/>
					</div>
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

export default connect(mapStateToProps, null)(Survivor);
