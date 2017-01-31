import React, { Component } from 'react';
import Stats from '../../components/Stats/Stats';
import StatAdjust from '../../components/Stats/StatAdjust';
import StatBox from '../../components/Stats/StatBox';

class SurvivorNotes extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showModal: false,
			name: 'Additional Notes',
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
			<StatBox
				name={this.state.name}
				modalBody={
					<StatAdjust
						name={this.state.name}
						amount={this.props.amount}
						max={this.props.max}
						min={this.state.min}
					/>
				}
			/>
		);
	}
}

SurvivorNotes.propTypes = {
	amount: React.PropTypes.number,
	max: React.PropTypes.number,
};

export default SurvivorNotes;
