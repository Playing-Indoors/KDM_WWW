import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal, ModalBody, ModalHeader, ModalFooter, Button } from 'reactstrap';

class SurvivalLimit extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showModal: this.props.open,
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
			<Modal isOpen={this.state.showModal}>
				<ModalHeader>Adjust {this.state.title}</ModalHeader>
				<ModalBody>
					Text
				</ModalBody>
				<ModalFooter>
					{this.renderConfirm()}
					<Button color="link" onClick={this.handleModal}>Cancel</Button>
				</ModalFooter>
			</Modal>
		);
	}
}

SurvivalLimit.defaultProps = {
	open: false,
};

SurvivalLimit.propTypes = {
	open: PropTypes.bool,
};

export default SurvivalLimit;
