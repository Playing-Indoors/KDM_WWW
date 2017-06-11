import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal, ModalBody, ModalHeader, ModalFooter, Button } from 'reactstrap';
import Stats from '../../components/Stats/Stats';
import StatList from '../../components/StatList/StatList';
import Milestone from '../../components/Milestone/Milestone';
import MilestoneDots from '../../components/MilestoneDots/MilestoneDots';
import NumberIncrement from '../../components/NumberIncrement/NumberIncrement';

class SurvivorFightArts extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showModal: false,
			title: 'Fighting Arts',
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
	renderConfirm() {
		if (this.state.amount == this.props.amount) {
			return (
				<Button
					color="secondary"
					onClick={this.handleConfirm}
				>Confirm</Button>
			);
		}
		return (
			<Button
				color="primary"
				onClick={this.handleModal}
			>Confirm</Button>
		);
	}
	render() {
		return (
			<div className="box survivorArts">
				<header className="box-header">
					<div className="box-header-title">{this.state.title}</div>
				</header>
				<button onClick={this.handleModal} type="button" className="box-content">
					<div className="statGroup">
						<StatList name="Unconscious Fighter" />
						<StatList />
						<StatList />
					</div>
				</button>
				<Modal isOpen={this.state.showModal} toggle={this.handleModal}>
					<ModalHeader>Adjust {this.state.title}</ModalHeader>
					<ModalBody>
						<select><option>Select a Fighter Art</option></select>
						<select><option>Select a Fighter Art</option></select>
						<select><option>Select a Fighter Art</option></select>
					</ModalBody>
					<ModalFooter>
						{this.renderConfirm()}
						<Button color="link" onClick={this.handleModal}>Cancel</Button>
					</ModalFooter>
				</Modal>
			</div>
		);
	}
}

export default SurvivorFightArts;
