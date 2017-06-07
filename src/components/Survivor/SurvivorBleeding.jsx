import React, { Component } from 'react';
import { Modal, ModalBody, ModalHeader, ModalFooter, Button } from 'reactstrap';
import Stats from '../../components/Stats/Stats';
import Milestone from '../../components/Milestone/Milestone';
import MilestoneDots from '../../components/MilestoneDots/MilestoneDots';
import NumberIncrement from '../../components/NumberIncrement/NumberIncrement';

class SurvivorBleeding extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showModal: false,
			title: 'Bleeding',
			amount: props.amount
		};
		this.handleModal = this.handleModal.bind(this);
		this.updateAmount = this.updateAmount.bind(this);
		this.handleConfirm = this.handleConfirm.bind(this);
	}
	handleModal() {
		this.setState({
			showModal: !this.state.showModal,
		});
	}
	handleConfirm(){
		// dispatches data to api to save
		this.setState({
			showModal: false,
		});
	}
	updateAmount(amount){
		this.setState({
			amount
		});
	}
	render() {
		return (
			<div className="box survivorBleeding">
				<header className="box-header">
					<div className="box-header-title">{this.state.title}</div>
				</header>
				<button onClick={this.handleModal} type="button" className="box-content">
					<div className="statGroup">
						<Stats
							amount={this.state.amount}
						></Stats>
						<MilestoneDots
							current={this.state.amount}
							count={this.props.max}
						/>
					</div>
				</button>
				<Modal isOpen={this.state.showModal} toggle={this.handleModal}>
					<ModalHeader toggle={this.handleModal}>{this.state.title}</ModalHeader>
					<ModalBody>
						<NumberIncrement
							name='bleeding'
							amount={this.state.amount}
							min={this.props.min}
							max={this.props.max}
							updateAmount={this.updateAmount}
						/>
						<MilestoneDots
							current={this.state.amount}
							count={this.props.max}
						/>
					</ModalBody>
					<ModalFooter>
						<Button color="secondary" onClick={this.handleConfirm}>Confirm</Button>
						{/*<Button color="primary" onClick={this.handleModal}>Confirm</Button>*/}
						{/* Primary button is the only one that does the save action and should only be visible when there is stuff to save */}
						<Button color="link" onClick={this.handleModal}>Cancel</Button>
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
