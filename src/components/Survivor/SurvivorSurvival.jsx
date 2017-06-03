import React, { Component } from 'react';
import { Modal, ModalBody, ModalHeader, ModalFooter, Button } from 'reactstrap';
import Stats from '../../components/Stats/Stats';
import StatAdjust from '../../components/Stats/StatAdjust';

class SurvivorSurvival extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showModal: false,
			title: 'Survival',
			min: 0,
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
			<div className="box survivorSurvival">
				<header className="box-header">
					<div className="box-header-title">{this.state.title}</div>
				</header>
				<button onClick={this.handleModal} type="button" className="box-content">
					<div className="statGroup">
						<Stats
							name={this.state.title}
							amount={this.props.amount}
							max={this.props.max}
							min={this.state.min}
						/>
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
								min={this.state.min}
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

SurvivorSurvival.propTypes = {
	amount: React.PropTypes.number,
	max: React.PropTypes.number,
};

export default SurvivorSurvival;
