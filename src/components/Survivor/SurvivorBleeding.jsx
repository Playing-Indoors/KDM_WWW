import React, { Component } from 'react';
import { Modal, ModalBody, ModalHeader, ModalFooter, Button } from 'reactstrap';
import Stats from '../../components/Stats/Stats';
import StatAdjust from '../../components/Stats/StatAdjust';
import Milestone from '../../components/Milestone/Milestone';

class SurvivorBleeding extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showModal: false,
			title: 'Bleeding',
			milestones: [
				{
					at: 1,
				},
				{
					at: 2,
				},
				{
					at: 3,
				},
				{
					at: 4,
				},
				{
					at: 5,
				},
			],
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
			<div className="box">
				<header className="box-header">
					<div className="box-header-title">{this.state.title}</div>
				</header>
				<button onClick={this.handleModal} type="button" className="box-content">
					<div className="statGroup">
						<Stats
							name={this.state.title}
							amount={this.props.amount}
							max={this.props.max}
							min={this.props.min}
						>
							<Milestone />
							<Milestone />
							<Milestone />
							<Milestone />
							<Milestone />
						</Stats>
					</div>
				</button>
				<Modal isOpen={this.state.showModal} toggle={this.handleModal}>
					<ModalHeader toggle={this.handleModal}>{this.state.title}</ModalHeader>
					<ModalBody>
						<div className="statSpendGroup">
							<StatAdjust
								name={this.state.title}
								amount={this.props.amount}
								max={this.props.max}
								min={this.props.min}
							/>
						</div>
					</ModalBody>
					<ModalFooter>
						<Button onClick={this.handleModal}>Cancel</Button>
						<Button color="primary">Confirm</Button>
					</ModalFooter>
				</Modal>
			</div>
		);
	}
}

SurvivorBleeding.defaultProps = {
	min: 0,
	max: 5,
};

SurvivorBleeding.propTypes = {
	amount: React.PropTypes.number,
	max: React.PropTypes.number,
	min: React.PropTypes.number,
};

export default SurvivorBleeding;
