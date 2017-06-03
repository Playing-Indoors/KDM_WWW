import React, { Component } from 'react';
import { Modal, ModalBody, ModalHeader, ModalFooter, Button } from 'reactstrap';
import classNames from 'classnames';

class StatBox extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showModal: false,
			classList: classNames([
				'box',
				this.props.myClass,
			])
		};
		this.handleModal = this.handleModal.bind(this);
		this.confirm = this.confirm.bind(this);
	}
	handleModal() {
		this.setState({
			showModal: !this.state.showModal,
		});
	}
	confirm() {
		console.log('hmmmmm....... dickbutts');
	}
	render() {
		return (
			<div className={this.state.classList}>
				<header className="box-header">
					<div className="box-header-title">{this.props.name}</div>
				</header>
				<button onClick={this.handleModal} type="button" className="box-content">
					<div className="statGroup">
						{this.props.stats}
					</div>
				</button>
				<Modal isOpen={this.state.showModal} toggle={this.handleModal}>
					<ModalHeader toggle={this.handleModal}>{this.props.name}</ModalHeader>
					<ModalBody>
						{this.props.modalBody}
					</ModalBody>
					<ModalFooter>
						<div className="btn-group btn-group--full">
							<Button onClick={this.handleModal}>Cancel</Button>
							<Button onClick={this.confirm} color="primary">Confirm</Button>
						</div>
					</ModalFooter>
				</Modal>
			</div>
		);
	}
}

StatBox.propTypes = {
	name: React.PropTypes.string,
	stats: React.PropTypes.node,
	modalBody: React.PropTypes.node,
};

export default StatBox;
