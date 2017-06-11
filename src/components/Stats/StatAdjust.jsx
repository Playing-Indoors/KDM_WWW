import React, { Component } from 'react';
import PropTypes from 'prop-types';

class StatAdjust extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: props.name, // Once we start passing data, change this to empty
			amount: props.amount,
			min: props.min || 0,
			max: props.max || 999,
			tempAmount: props.amount,
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
			effect: '',
		};
	}
	onAdjustAmount(amount = -1) {
		// Temporary adjust value
		let adjust = this.state.tempAmount + amount;
		// Make sure we don't go beyond our min/max
		adjust = Math.min(Math.max(adjust, this.state.min), this.state.max);
		console.log(`${this.state.name} changed by ${amount} to ${adjust}`);
		// Need to pop this up or redux it up
		this.setState({
			tempAmount: adjust,
		});
	}
	// Renders our milestones and attaches their class
	renderMilestones() {
		if (!this.state.milestones) {
			return null;
		}
		const milestone = [];
		// Loop through from min value to max grabbing all of the milestones
		for (let i = 1; i <= this.state.max; i += 1) {
			const filled = (i <= this.state.tempAmount) ? 'milestone--active' : '';
			if (this.state.milestones.find(item => item.at === i)) {
				milestone.push(<span key={i} className={`milestone milestone--event ${filled}`} />);
			} else {
				milestone.push(<span key={i} className={`milestone ${filled}`} />);
			}
		}
		return <div className="statSpend-milestones">{milestone}</div>;
	}
	// Finds if there's an effect of a milestone
	// Crap, this isn't want we want, hmm... i'll leave this in for now.
	renderMilestonesAffect() {
		if (!this.state.milestones) {
			return '\u00a0';
		}
		// Loop through items in reverse to find the most recent milestone event.
		for (let i = this.state.tempAmount; i >= this.state.min; i -= 1) {
			const findMilestone = this.state.milestones.find(item => item.at === i);
			if (findMilestone) {
				return findMilestone.name;
			}
		}
		return '\u00a0';
	}
	render() {
		return (
			<div className="statSpend">
				<button
					type="button"
					onClick={() => { this.onAdjustAmount(-1); }}
					className="statSpend-change"
				>&ndash;</button>
				<div className="statSpend-num">{this.state.tempAmount}</div>
				<button type="button" onClick={() => { this.onAdjustAmount(1); }} className="statSpend-change">+</button>
				{this.renderMilestones()}
				<div className="statSpend-title">
					{this.state.name}
				</div>
				<div className="statSpend-subtitle">{this.renderMilestonesAffect()}</div>
			</div>
		);
	}
}

StatAdjust.propTypes = {
	name: PropTypes.string,
	amount: PropTypes.number.isRequired,
	min: PropTypes.number,
	max: PropTypes.number,
	// milestones: PropTypes.arrayOf(PropTypes.string),
};

export default StatAdjust;
