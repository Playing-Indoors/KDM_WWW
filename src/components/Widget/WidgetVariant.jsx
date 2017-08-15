import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Modal, ModalBody, ModalHeader, ModalFooter, Button } from 'reactstrap';

// TODO
// - Make it so that you can pass a link/action if you click on it
// - If this is true then change the color of the header

class WidgetVariant extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showModal: false,
			headerClass: classNames({
				'widget-header': true,
				'widget-header--link': this.props.children.length > 1,
			}),
		};
		this.handleModal = this.handleModal.bind(this);
	}
	handleModal() {
		this.setState({
			showModal: !this.state.showModal,
		});
	}
	renderHeader() {
		if (this.props.title) {
			return (
				<header className={this.state.headerClass}>
					<div className="widget-header-title">{this.props.title}</div>
				</header>
			);
		}
		return null;
	}
	renderContent() {
		if (this.props.children.length > 1) {
			return (
				<button
					type="button"
					className="widget-content"
					onClick={this.handleModal}
				>
					{ this.props.children[0] }
				</button>
			);
		}
		return (
			<div className="widget-content">
				{ this.props.children[0] }
			</div>
		);
	}
	renderModal() {
		if (this.props.children.length > 1) {
			return (
				<Modal isOpen={this.state.showModal}>
					<ModalHeader>Adjust {this.state.title}</ModalHeader>
					<ModalBody>
						{ this.props.children[1] }
					</ModalBody>
					<ModalFooter>
						<Button color="link" onClick={this.handleModal}>Cancel</Button>
					</ModalFooter>
				</Modal>
			)
		}
		return null;
	}
	render() {
		return (
			<div className="widget">
				{this.renderHeader()}
				{this.renderContent()}
				{this.renderModal()}
			</div>
		);
	}
}

WidgetVariant.propTypes = {
	title: PropTypes.string,
	children: PropTypes.node,
};

export default WidgetVariant;
