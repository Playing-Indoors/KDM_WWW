import React, { Component } from 'react';
import { Modal, ModalBody, ModalHeader, ModalFooter, Button } from 'reactstrap';
import Stats from '../../components/Stats/Stats';
import StatAdjust from '../../components/Stats/StatAdjust';
import StatAdjust2 from '../../components/Stats/StatAdjust2';

class SurvivorArmor extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showModal: false,
			name: 'Armor',
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
		this.updateFromChild = this.updateFromChild.bind(this);
	}
	handleModal() {
		this.setState({
			showModal: !this.state.showModal,
		});
	}
	// How we get the data from the child
	updateFromChild(locationName, newArmorState){
		this.setState({
			[locationName]: newArmorState
		})
	}
	render() {
		return (
			<div className="box">
				<header className="box-header">
					<div className="box-header-title">{this.state.name}</div>
				</header>
				<button onClick={this.handleModal} type="button" className="box-content">
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
				</button>
				<Modal isOpen={this.state.showModal} toggle={this.handleModal}>
					<ModalHeader toggle={this.handleModal}>{this.state.name}</ModalHeader>
					<ModalBody>
						<StatAdjust2
							updateToParent={this.updateFromChild}
							armorPart={this.state.brain}
						/>
						<StatAdjust
							name={this.state.head.name}
							amount={this.state.head.amount}
							max={this.state.head.max}
							min={this.state.head.min}
						/>
						<StatAdjust
							name={this.state.arms.name}
							amount={this.state.arms.amount}
							max={this.state.arms.max}
							min={this.state.arms.min}
						/>
						<StatAdjust
							name={this.state.body.name}
							amount={this.state.body.amount}
							max={this.state.body.max}
							min={this.state.body.min}
						/>
						<StatAdjust
							name={this.state.waist.name}
							amount={this.state.waist.amount}
							max={this.state.waist.max}
							min={this.state.waist.min}
						/>
						<StatAdjust
							name={this.state.feet.name}
							amount={this.state.feet.amount}
							max={this.state.feet.max}
							min={this.state.feet.min}
						/>
					</ModalBody>
					<ModalFooter>
						<div className="btn-group btn-group--full">
							<Button onClick={this.handleModal}>Cancel</Button>
							<Button onClick={this.confirm} color="primary">Confirm</Button>
						</div>
					</ModalFooter>
				</Modal>
			</div>
		);
	}
}

SurvivorArmor.propTypes = {
	amount: React.PropTypes.number,
	max: React.PropTypes.number,
};

export default SurvivorArmor;
