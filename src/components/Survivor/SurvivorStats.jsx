import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, TabContent, TabPane, Nav, NavItem, NavLink, Modal, ModalBody, ModalHeader, ModalFooter, Button } from 'reactstrap';
import classNames from 'classnames';
import Stats from '../../components/Stats/Stats';
import Milestone from '../../components/Milestone/Milestone';
import MilestoneDots from '../../components/MilestoneDots/MilestoneDots';
import NumberIncrement from '../../components/NumberIncrement/NumberIncrement';

class SurvivorStats extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showModal: false,
			activeTab: 'permanent',
			title: 'Primary Stats',
			movement: props.movement,
			accuracy: props.accuracy,
			strength: props.strength,
			evasion: props.evasion,
			luck: props.luck,
			speed: props.speed,
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
			<div className="box survivorStats">
				<header className="box-header">
					<div className="box-header-title">{this.state.title}</div>
				</header>
				<button onClick={this.handleModal} type="button" className="box-content">
					<div className="statGroup">
						<Stats
							name={"Mov"}
							amount={this.state.movement}
						/>
						<Stats
							name={"Acc"}
							amount={this.state.accuracy}
						/>
						<Stats
							name={"Str"}
							amount={this.state.strength}
						/>
						<Stats
							name={"Eva"}
							amount={this.state.evasion}
						/>
						<Stats
							name={"Luck"}
							amount={this.state.luck}
						/>
						<Stats
							name={"Spd"}
							amount={this.state.speed}
						/>
					</div>
				</button>
				<Modal isOpen={this.state.showModal} toggle={this.handleModal}>
					<ModalHeader>Adjust {this.state.title}</ModalHeader>
					<ModalBody>


						<button onClick={() => { this.handleTab('permanent'); }}>Permanent</button>
						<button onClick={() => { this.handleTab('temporary'); }}>Temporary</button>
						<TabContent activeTab={this.state.activeTab}>
							<TabPane tabId="permanent">
								<NumberIncrement
									name={'Movement'}
									amount={this.state.movement}
									min={this.props.min}
									max={this.props.max}
									updateAmount={this.updateAmount}
								/>
								<NumberIncrement
									name={'Accuracy'}
									amount={this.state.accuracy}
									min={this.props.min}
									max={this.props.max}
									updateAmount={this.updateAmount}
								/>
								<NumberIncrement
									name={'Strength'}
									amount={this.state.strength}
									min={this.props.min}
									max={this.props.max}
									updateAmount={this.updateAmount}
								/>
								<NumberIncrement
									name={'Evasion'}
									amount={this.state.evasion}
									min={this.props.min}
									max={this.props.max}
									updateAmount={this.updateAmount}
								/>
								<NumberIncrement
									name={'Luck'}
									amount={this.state.luck}
									min={this.props.min}
									max={this.props.max}
									updateAmount={this.updateAmount}
								/>
								<NumberIncrement
									name={'Speed'}
									amount={this.state.speed}
									min={this.props.min}
									max={this.props.max}
									updateAmount={this.updateAmount}
								/>
							</TabPane>
							<TabPane tabId="temporary">
								<NumberIncrement
									name={'Movement'}
									amount={this.state.movement}
									min={this.props.min}
									max={this.props.max}
									updateAmount={this.updateAmount}
								/>
								<NumberIncrement
									name={'Accuracy'}
									amount={this.state.accuracy}
									min={this.props.min}
									max={this.props.max}
									updateAmount={this.updateAmount}
								/>
								<NumberIncrement
									name={'Strength'}
									amount={this.state.strength}
									min={this.props.min}
									max={this.props.max}
									updateAmount={this.updateAmount}
								/>
								<NumberIncrement
									name={'Evasion'}
									amount={this.state.evasion}
									min={this.props.min}
									max={this.props.max}
									updateAmount={this.updateAmount}
								/>
								<NumberIncrement
									name={'Luck'}
									amount={this.state.luck}
									min={this.props.min}
									max={this.props.max}
									updateAmount={this.updateAmount}
								/>
								<NumberIncrement
									name={'Speed'}
									amount={this.state.speed}
									min={this.props.min}
									max={this.props.max}
									updateAmount={this.updateAmount}
								/>
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

SurvivorStats.defaultProps = {
	movement: 5,
	accuracy: 0,
	strength: 0,
	evasion: 0,
	luck: 0,
	speed: 0,
};

SurvivorStats.propTypes = {
	movement: PropTypes.number,
	accuracy: PropTypes.number,
	strength: PropTypes.number,
	evasion: PropTypes.number,
	luck: PropTypes.number,
	speed: PropTypes.number,
};

export default SurvivorStats;
