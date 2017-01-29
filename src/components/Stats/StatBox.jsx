import React, { Component } from 'react';
import { Modal, ModalBody, ModalHeader, ModalFooter, Button } from 'reactstrap';

class StatBox extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showModal: false,
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
			<div className="box">
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
						<Button onClick={this.handleModal}>Cancel</Button>
						<Button color="primary">Confirm</Button>
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
