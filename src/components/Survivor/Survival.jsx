import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, TabContent, TabPane, Button } from 'reactstrap';
import Stat from '../../components/Stats/Stats';

const { number } = React.PropTypes;

class Survival extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: 'Survival',
			number: this.props.number,
			tempNumber: this.props.number,
			showModal: false,
			activeTab: '1',
			selectedAction: '',
			max: this.props.max,
			min: 0,
		};
		this.toggleModal = this.toggleModal.bind(this);
	}
	onSurvivalSave() {
		if (this.state.activeTab === '1') {
			this.state.number = this.state.tempNumber;
		} else {
			this.state.number = this.state.number - 1;
		}
		// TODO: number is updated with the real final amount. save this value;

		// Close modal;
		this.toggleModal();
	}
	canSaveSurvival() {
		// if it's the first tab and our value differs from the original
		if (this.state.activeTab === '1') {
			return this.state.tempNumber !== this.state.number;
		}
		// we're on the second tab only allow if there's a selected action
		return this.state.selectedAction.length > 0;
	}
	selectAction(type) {
		this.setState({
			selectedAction: type,
		});
	}
	adjustSurvival(type = 'manual', amount = -1) {
		// We use a temp value so we can modify it and still allow the user to cancel out
		console.log(`Survivor changed by ${amount} because of ${type}`);
		const adjust = this.state.tempNumber + amount;
		this.setState({
			tempNumber: Math.min(Math.max(adjust, this.state.min), this.state.max),
		});
	}
	handleSurvivalTab() {
		// allows our user to choose their survival action
		this.setState({
			activeTab: '2',
		});
	}
	toggleModal() {
		// reset our state to default
		this.setState({
			activeTab: '1',
			tempNumber: this.props.number,
			showModal: !this.state.showModal,
		});
	}
	render() {
		return (
			<div className="box">
				<header className="box-header">
					<div className="box-header-title">Survival</div>
				</header>
				<a href="#adjustSurvival" role="button" onClick={this.toggleModal} className="box-content">
					<div className="statGroup">
						<Stat title={this.state.title} number={this.state.number} />
					</div>
				</a>
				<Modal isOpen={this.state.showModal} toggle={this.toggleModal}>
					<ModalHeader>
						Survival <br />
						<small>Max: {this.state.max}</small>
					</ModalHeader>
					<ModalBody>
						<TabContent activeTab={this.state.activeTab}>
							<TabPane tabId="1">
								<div className="statSpend">
									<button
										type="button"
										onClick={() => { this.adjustSurvival('manual', -1); }}
										className="statSpend-change"
									>&ndash;</button>
									<div className="statSpend-num">{this.state.tempNumber}</div>
									<button type="button" onClick={() => { this.adjustSurvival('manual', 1); }} className="statSpend-change">+</button>
								</div>
								<div className="text-xs-center">
									or
									<br />
									<br />
									<Button onClick={() => { this.handleSurvivalTab(); }}>Spend Survival</Button>
									<br /><br />
								</div>
							</TabPane>
							<TabPane tabId="2">
								<div className="text-xs-center">
									which feat will the survivor be performing?
									<br />
									{/* Need to loop through all of the suvivor actions */}
									<Button
										color={(this.state.selectedAction === 'Dodge') ? 'primary' : 'secondary'}
										onClick={() => { this.selectAction('Dodge'); }}
									>Dodge</Button>
									<Button
										color={(this.state.selectedAction === 'Encourage') ? 'primary' : 'secondary'}
										onClick={() => { this.selectAction('Encourage'); }}
									>Encourage</Button>
									<Button
										color={(this.state.selectedAction === 'Dash') ? 'primary' : 'secondary'}
										onClick={() => { this.selectAction('Dash'); }}
									>Dash</Button>
									{/* example disabled button if survivor can't use it */}
									<Button
										color={(this.state.selectedAction === 'Surge') ? 'primary' : 'secondary'}
										onClick={() => { this.selectAction('Surge'); }}
										disabled
									>Surge</Button>
									<br />
									<br />
								</div>
							</TabPane>
						</TabContent>
					</ModalBody>
					<ModalFooter>
						<Button onClick={this.toggleModal}>Cancel</Button>
						<Button
							color="primary"
							onClick={() => { this.onSurvivalSave(); }}
							disabled={!this.canSaveSurvival()}
						>Confirm</Button>
					</ModalFooter>
				</Modal>

			</div>
		);
	}
}

Survival.propTypes = {
	max: number.isRequired,
	number: number.isRequired,
};

export default Survival;
