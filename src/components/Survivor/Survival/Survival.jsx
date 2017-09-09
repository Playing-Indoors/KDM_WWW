import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ModalFooter, Button } from 'reactstrap';
import NumberIncrement from '../../../components/NumberIncrement/NumberIncrement';
import Stat from '../../../components/Stats/Stats';
import WidgetVariant from '../../../components/Widget/WidgetVariant';

class Survival extends Component {
	constructor(props) {
		super(props);
		this.state = {
			toggleModal: false,
			title: 'Survival',
			amount: props.amount,
		};
		// Binding Events
		this.updateAmount = this.updateAmount.bind(this);
		this.handleCancel = this.handleCancel.bind(this);
		this.handleConfirm = this.handleConfirm.bind(this);
		this.handleModal = this.handleModal.bind(this);
	}
	// Controls opening up the modal
	handleModal() {
		this.setState({
			toggleModal: !this.state.toggleModal,
		});
	}
	// Cancel event from the modal, reset the state.
	handleCancel() {
		this.setState({
			amount: this.props.amount,
		});
		this.handleModal();
	}
	// Handle's the save and makes the API Call
	handleConfirm() {
		// TODO: KHOA SAVE THIS SHIT.
		console.warn('Saving survival for survivor oid', this.props.oid);
		this.handleModal();
	}
	// Function to pass to Number Increment
	updateAmount(amount) {
		this.setState({ amount });
	}
	// We pass the confirm function into the modal so that we have a pending state
	renderConfirm() {
		// Disable confirm unless we've changed data
		if (this.state.amount === this.props.amount) {
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
				onClick={this.handleConfirm}
			>Confirm</Button>
		);
	}
	renderActions() {
		return this.props.actions.map(action =>
			(
				<span className={(action.available) ? 'is-active' : ''} key={action.handle}>
					{action.name}
				</span>
			),
		);
	}
	render() {
		return (
			<WidgetVariant
				title={this.state.title}
				toggleModal={this.state.toggleModal}
				myClass={'survivorSurvival'}
			>
				{ /* This is in the widget */ }
				<Stat amount={this.state.amount} />
				{ /* This is in the modal body */ }
				<div>
					<NumberIncrement
						amount={this.state.amount}
						min={1}
						max={this.props.limit}
						updateAmount={this.updateAmount}
					/>
					<div className="survivalSkills">
						{ this.renderActions() }
					</div>
				</div>
				{ /* This get's passed to the modal footer */ }
				<ModalFooter>
					{ this.renderConfirm() }
					<Button
						onClick={this.handleCancel}
						color="link"
					>Cancel</Button>
				</ModalFooter>
			</WidgetVariant>
		);
	}
}

Survival.propTypes = {
	amount: PropTypes.number,
	oid: PropTypes.string,
	limit: PropTypes.number,
	actions: PropTypes.arrayOf(PropTypes.object),
};

Survival.defaultProps = {
	amount: 0,
	limit: 1,
	oid: '',
	actions: [],
};

export default Survival;
