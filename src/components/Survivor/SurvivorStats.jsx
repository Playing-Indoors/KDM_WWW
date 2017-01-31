import React, { Component } from 'react';
import Stats from '../../components/Stats/Stats';
import StatAdjust from '../../components/Stats/StatAdjust';
import StatBox from '../../components/Stats/StatBox';

class SurvivorStats extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showModal: false,
			name: 'Primary Stats',
			min: 0,
			movement: {
				name: 'Movement',
				amount: 5,
				max: 10,
				min: 0,
			},
			accuracy: {
				name: 'Accuracy',
				amount: 5,
				max: 10,
				min: 0,
			},
			strength: {
				name: 'Strength',
				amount: 5,
				max: 10,
				min: 0,
			},
			evasion: {
				name: 'Evasion',
				amount: 5,
				max: 10,
				min: 0,
			},
			luck: {
				name: 'Luck',
				amount: 5,
				max: 10,
				min: 0,
			},
			speed: {
				name: 'Speed',
				amount: 5,
				max: 10,
				min: 0,
			},
		};
		this.handleModal = this.handleModal.bind(this);
	}
	handleModal() {
		this.setState({
			showModal: !this.state.showModal,
		});
	}
	render() {
		return (
			<StatBox
				name={this.state.name}
				stats={
					<div className="statGroup">
						<Stats
							name={this.state.movement.name}
							amount={this.state.movement.amount}
							max={this.state.movement.max}
							min={this.state.movement.min}
						/>
						<Stats
							name={this.state.accuracy.name}
							amount={this.state.accuracy.amount}
							max={this.state.accuracy.max}
							min={this.state.accuracy.min}
						/>
						<Stats
							name={this.state.strength.name}
							amount={this.state.strength.amount}
							max={this.state.strength.max}
							min={this.state.strength.min}
						/>
						<Stats
							name={this.state.evasion.name}
							amount={this.state.evasion.amount}
							max={this.state.evasion.max}
							min={this.state.evasion.min}
						/>
						<Stats
							name={this.state.luck.name}
							amount={this.state.luck.amount}
							max={this.state.luck.max}
							min={this.state.luck.min}
						/>
						<Stats
							name={this.state.speed.name}
							amount={this.state.speed.amount}
							max={this.state.speed.max}
							min={this.state.speed.min}
						/>
					</div>
				}
				modalBody={
					<div className="statSpendGroup">
						<StatAdjust
							name={this.state.movement.name}
							amount={this.state.movement.amount}
							max={this.state.movement.max}
							min={this.state.movement.min}
						/>
						<StatAdjust
							name={this.state.accuracy.name}
							amount={this.state.accuracy.amount}
							max={this.state.accuracy.max}
							min={this.state.accuracy.min}
						/>
						<StatAdjust
							name={this.state.strength.name}
							amount={this.state.strength.amount}
							max={this.state.strength.max}
							min={this.state.strength.min}
						/>
						<StatAdjust
							name={this.state.evasion.name}
							amount={this.state.evasion.amount}
							max={this.state.evasion.max}
							min={this.state.evasion.min}
						/>
						<StatAdjust
							name={this.state.luck.name}
							amount={this.state.luck.amount}
							max={this.state.luck.max}
							min={this.state.luck.min}
						/>
						<StatAdjust
							name={this.state.speed.name}
							amount={this.state.speed.amount}
							max={this.state.speed.max}
							min={this.state.speed.min}
						/>
					</div>
				}
			/>
		);
	}
}

SurvivorStats.propTypes = {
	amount: React.PropTypes.number,
	max: React.PropTypes.number,
};

export default SurvivorStats;
