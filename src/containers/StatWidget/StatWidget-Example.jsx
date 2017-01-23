import React from 'react';
import { StatWidget } from './StatWidget';
import Stat from '../../components/Stats/Stats';

class StatExample extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			statXP: {
				name: 'Hunt XP',
				amount: 8,
				max: 16,
				min: 0,
				milestones: [
					{
						at: 2,
						name: 'Age 1',
						type: 'story',
					},
					{
						at: 6,
						name: 'Age 2',
						type: 'story',
					},
					{
						at: 10,
						name: 'Age 3',
						type: 'story',
					},
					{
						at: 15,
						name: 'Age 4',
						type: 'story',
					},
					{
						at: 16,
						name: 'Retired',
						type: 'story',
					},
				],
			},
		};
	}
	render() {
		return (
			<Stat
				name={this.state.statXP.name}
				amount={this.state.statXP.amount}
				max={this.state.statXP.max}
				min={this.state.statXP.min}
				milestone={this.state.statXP.milestones}
			/>
		);
	}
}

export default StatWidget(StatExample);
