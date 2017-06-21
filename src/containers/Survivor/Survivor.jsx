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
import SurvivorWeapon from '../../components/Survivor/SurvivorWeapon';
import SurvivorCourage from '../../components/Survivor/SurvivorCourage';
import SurvivorUnderstanding from '../../components/Survivor/SurvivorUnderstanding';
import SurvivorXP from '../../components/Survivor/SurvivorXP';

// TODO
// [ ] Survivor name should be in page heading
// [x] Survivor boxes should be css grid
//

class Survivor extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			settlementData: null,
			survivor: null,
			fightingArts: [
				'Unconscious Fighter',
				'Knights Step',
				'Keg Smash'
			]
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
				<div className="survivor">
					{ /* <h1 className="text-center">{this.state.survivor.sheet.name}</h1> */ }
					<SurvivorSurvival
						amount={parseInt(this.state.survivor.sheet.survival, 10)}
						max={7}
					/>
					<SurvivorBleeding
						amount={parseInt(this.state.survivor.sheet.Movement, 10)}
					/>
					<SurvivorXP
						amount={parseInt(this.state.survivor.sheet.hunt_xp, 10)}
					/>
					<SurvivorCourage
						amount={parseInt(this.state.survivor.sheet.Courage, 10)}
					/>
					<SurvivorUnderstanding
						amount={parseInt(this.state.survivor.sheet.Understanding, 10)}
					/>
					<SurvivorWeapon
						amount={this.state.survivor.sheet['Weapon Proficiency']}
					/>
					<SurvivorStats
						movement={parseInt(this.state.survivor.sheet.Movement, 10)}
						accuracy={parseInt(this.state.survivor.sheet.Accuracy, 10)}
						strength={parseInt(this.state.survivor.sheet.Strength, 10)}
						evasion={parseInt(this.state.survivor.sheet.Evasion, 10)}
						luck={parseInt(this.state.survivor.sheet.Luck, 10)}
						speed={parseInt(this.state.survivor.sheet.Speed, 10)}
					/>
					<SurvivorArmor
						insanity={parseInt(this.state.survivor.sheet.Insanity, 10)}
						head={parseInt(this.state.survivor.sheet.Head, 10)}
						arms={parseInt(this.state.survivor.sheet.Arms, 10)}
						body={parseInt(this.state.survivor.sheet.Body, 10)}
						waist={parseInt(this.state.survivor.sheet.Waist, 10)}
						legs={parseInt(this.state.survivor.sheet.Legs, 10)}
					/>
					<SurvivorFightArts
						arts={this.state.fightingArts}
					/>
					<SurvivorDisorders
						disorders={this.state.survivor.sheet.disorders}
					/>
					<SurvivorAbilities
						abilities={this.state.survivor.sheet.abilities_and_impairments}
					/>
					<SurvivorImpairments
						impairments={this.state.survivor.sheet.abilities_and_impairments}
					/>
					<SurvivorNotes
						notes={this.state.survivor.sheet.notes}
					/>
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
