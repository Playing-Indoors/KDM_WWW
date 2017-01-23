import React, { Component } from 'react';
import Stat from '../../components/Stats/Stats.jsx';

class SurvivorXP extends Component {
	constructor(props){
		super(props);
		this.state = {
			title: 'Hunt XP',
			number: this.props.number,
			milestones: milestonesXP(this.props.number),
		}
	}
	render() {
		return (
			<Stat title={this.state.title} number={this.state.number} milestones={this.state.milestones} />
		)
	}
}

function milestonesXP(number) {
	let milestone = [];
	// 5 stages {2, 6, 10, 15, 16}
	// console.log(number);
	if(number < 2) {
		milestone.push('empty');
		milestone.push('empty');
		milestone.push('empty');
		milestone.push('empty');
	} else {

	}
	milestone.push('filled');
	milestone.push('filled');
	milestone.push('empty');
	milestone.push('empty');
	milestone.push('empty');
	return milestone;
}

export default SurvivorXP;
