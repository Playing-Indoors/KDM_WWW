import React, { Component } from 'react';
import Stats from '../../components/Stats/Stats';
import StatAdjust from '../../components/Stats/StatAdjust';
import StatBox from '../../components/Stats/StatBox';

class SurvivorFightArts extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showModal: false,
			name: 'Fighting Arts',
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
				myClass="survivorArts"
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

SurvivorFightArts.propTypes = {
	amount: React.PropTypes.number,
	max: React.PropTypes.number,
};

export default SurvivorFightArts;
