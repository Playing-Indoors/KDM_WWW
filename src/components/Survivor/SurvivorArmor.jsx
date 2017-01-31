import React, { Component } from 'react';
import Stats from '../../components/Stats/Stats';
import StatAdjust from '../../components/Stats/StatAdjust';
import StatBox from '../../components/Stats/StatBox';

class SurvivorArmor extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showModal: false,
			name: 'Primary Stats',
			min: 0,
			brain: {
				name: 'Brain',
				amount: 5,
				max: 10,
				min: 0,
			},
			head: {
				name: 'Head',
				amount: 5,
				max: 10,
				min: 0,
			},
			arms: {
				name: 'Arms',
				amount: 5,
				max: 10,
				min: 0,
			},
			body: {
				name: 'Body',
				amount: 5,
				max: 10,
				min: 0,
			},
			waist: {
				name: 'Waist',
				amount: 5,
				max: 10,
				min: 0,
			},
			feet: {
				name: 'Feet',
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
							name={this.state.brain.name}
							amount={this.state.brain.amount}
							max={this.state.brain.max}
							min={this.state.brain.min}
						/>
						<Stats
							name={this.state.head.name}
							amount={this.state.head.amount}
							max={this.state.head.max}
							min={this.state.head.min}
						/>
						<Stats
							name={this.state.arms.name}
							amount={this.state.arms.amount}
							max={this.state.arms.max}
							min={this.state.arms.min}
						/>
						<Stats
							name={this.state.body.name}
							amount={this.state.body.amount}
							max={this.state.body.max}
							min={this.state.body.min}
						/>
						<Stats
							name={this.state.waist.name}
							amount={this.state.waist.amount}
							max={this.state.waist.max}
							min={this.state.waist.min}
						/>
						<Stats
							name={this.state.feet.name}
							amount={this.state.feet.amount}
							max={this.state.feet.max}
							min={this.state.feet.min}
						/>
					</div>
				}
				modalBody={
					<StatAdjust
						name={this.state.name}
						amount={this.props.amount}
						max={this.props.max}
						min={this.state.min}
					/>
				}
			/>
		);
	}
}

SurvivorArmor.propTypes = {
	amount: React.PropTypes.number,
	max: React.PropTypes.number,
};

export default SurvivorArmor;
