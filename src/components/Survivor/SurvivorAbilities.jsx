import React, { Component } from 'react';
import Stats from '../../components/Stats/Stats';
import StatAdjust from '../../components/Stats/StatAdjust';
import StatBox from '../../components/Stats/StatBox';

class SurvivorAbilities extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showModal: false,
			name: 'Abilities',
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
				stats={
					<Stats
						name={this.state.name}
						amount={this.props.amount}
						max={this.props.max}
						min={this.state.min}
					/>
				}
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

SurvivorAbilities.propTypes = {
	amount: React.PropTypes.number,
	max: React.PropTypes.number,
};

export default SurvivorAbilities;
