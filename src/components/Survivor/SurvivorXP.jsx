import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TabContent, TabPane, Nav, NavItem, NavLink, Modal, ModalBody, ModalHeader, ModalFooter, Button } from 'reactstrap';
import classNames from 'classnames';
import Stats from '../../components/Stats/Stats';
import Milestone from '../../components/Milestone/Milestone';
import MilestoneDots from '../../components/MilestoneDots/MilestoneDots';
import NumberIncrement from '../../components/NumberIncrement/NumberIncrement';

class SurvivorXP extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeTab: 'amount',
			showModal: false,
			title: 'Hunt XP',
			amount: props.amount
		};
		this.handleTab = this.handleTab.bind(this);
		this.handleModal = this.handleModal.bind(this);
		this.updateAmount = this.updateAmount.bind(this);
		this.handleConfirm = this.handleConfirm.bind(this);
	}
	handleTab(tab) {
		if (this.state.activeTab !== tab) {
			this.setState({
				activeTab: tab
			});
		}
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
			<div className="box survivorXP">
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
					<ModalHeader>Adjust {this.state.title}</ModalHeader>
					<ModalBody>


						<button onClick={() => { this.handleTab('amount'); }}>amount</button>
						<button onClick={() => { this.handleTab('weapon'); }}>Weapon Prof</button>
						<button onClick={() => { this.handleTab('age1'); }}>age1</button>
						<button onClick={() => { this.handleTab('age2'); }}>age2</button>
						<button onClick={() => { this.handleTab('age3'); }}>age3</button>
						<button onClick={() => { this.handleTab('age4'); }}>age4</button>
						<button onClick={() => { this.handleTab('retire'); }}>retire</button>
						<TabContent activeTab={this.state.activeTab}>
							<TabPane tabId="amount">
								<NumberIncrement
									amount={this.state.amount}
									min={this.props.min}
									max={this.props.max}
									updateAmount={this.updateAmount}
								/>
								<MilestoneDots
									current={this.state.amount}
									count={this.props.max}
								/>
							</TabPane>
							<TabPane tabId="weapon">
								Weapon Proficiency
							</TabPane>
							<TabPane tabId="age1">
								Age 1
							</TabPane>
							<TabPane tabId="age2">
								Age 2
							</TabPane>
							<TabPane tabId="age3">
								Age 3
							</TabPane>
							<TabPane tabId="age4">
								Age 4
							</TabPane>
							<TabPane tabId="retire">
								retire
							</TabPane>
						</TabContent>

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

SurvivorXP.defaultProps = {
	min: 0,
	max: 16,
};

SurvivorXP.propTypes = {
	amount: PropTypes.number,
	max: PropTypes.number,
	min: PropTypes.number,
};

export default SurvivorXP;
