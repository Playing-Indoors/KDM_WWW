import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, TabContent, TabPane, Button } from 'reactstrap';
import SurvivalLimitModify from './SurvivalLimit-Modal';
import Stats from '../../components/Stats/Stats';
import Widget from '../../components/Widget/Widget';

class SurvivalLimit extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showModal: false,
			title: 'Survival Limit',
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
			<Widget title={this.state.title} event>
				<div className="statGroup" onClick={this.handleModal}>
					<Stats amount={5} />
				</div>
				<SurvivalLimitModify open={this.state.showModal} />
			</Widget>
		);
	}
}

export default SurvivalLimit;
