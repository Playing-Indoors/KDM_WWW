import React, { Component } from 'react';
import { Modal, ModalBody, ModalHeader, ModalFooter, Button } from 'reactstrap';
import Stats from '../../components/Stats/Stats';
import StatAdjust from '../../components/Stats/StatAdjust';
import StatBox from '../../components/Stats/StatBox';

class SurvivorSurvival extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showModal: false,
			name: 'XP',
			min: 0,
			hunt: {
				name: 'Hunt XP',
				amount: 5,
				max: 10,
				min: 0,
			},
			courage: {
				name: 'Courage',
				amount: 5,
				max: 10,
				min: 0,
			},
			understanding: {
				name: 'Understanding',
				amount: 5,
				max: 10,
				min: 0,
			},
			weapon: {
				name: 'Weapon',
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
	changesFromChild(dataFromChild){
		console.log(dataFromChild);
		this.setState({
			hunt: {
				name: 'Hunt XP',
				amount: dataFromChild,
				max: 10,
				min: 0,
			}
		})
	}
	render() {
		return (
			<StatBox
				updateToParent={this.changesFromChild.bind(this)}
				huntAmount={this.state.hunt.amount}
				name={this.state.name}
				stats={
					<div className="statGroup">
						<Stats
							name={this.state.courage.name}
							amount={this.state.courage.amount}
							max={this.state.courage.max}
							min={this.state.courage.min}
						/>
						<Stats
							name={this.state.understanding.name}
							amount={this.state.understanding.amount}
							max={this.state.understanding.max}
							min={this.state.understanding.min}
						/>
						<Stats
							name={this.state.weapon.name}
							amount={this.state.weapon.amount}
							max={this.state.weapon.max}
							min={this.state.weapon.min}
						/>
						<Stats
							name={this.state.hunt.name}
							amount={this.state.hunt.amount}
							max={this.state.hunt.max}
							min={this.state.hunt.min}
						/>
					</div>
				}
				modalBody={
					<StatAdjust
						name={this.state.hunt.name}
						amount={this.state.hunt.amount}
						max={this.state.hunt.max}
						min={this.state.hunt.min}
					/>
				}
			/>
		);
	}
}

SurvivorSurvival.propTypes = {
	amount: React.PropTypes.number,
	max: React.PropTypes.number,
};

export default SurvivorSurvival;
