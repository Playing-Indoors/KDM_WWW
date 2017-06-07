import React, { Component } from 'react';
import PropTypes from 'prop-types';

// TODO
// [ ] Better format this so that the width doesn't change on increment/decrement
// [ ] Add support for H, L

class NumberIncrement extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: props.name,
			amount: props.amount || 0,
			min: props.min || -999,
			max: props.max || 999,
		};
	}
	componentWillReceiveProps(nextProps){
		if(nextProps.amount){
			this.setState({
				amount: nextProps.amount,
			});
		}
	}
	onAdjustAmount(amount = 1) {
		// Temporary adjust value
		let newAmount = this.state.amount + amount;
		// Make sure we don't go beyond our min/max
		newAmount = Math.min(Math.max(newAmount, this.state.min), this.state.max);
		console.log(`${this.state.name} changed from ${this.state.amount} to ${newAmount}`);
		this.props.updateAmount(newAmount);
	}

	render() {
		return (
			<div className="numberIncrement">
				<button
					type="button"
					onClick={() => { this.onAdjustAmount(-1); }}
					className="numberIncrement-change"
				>&ndash;</button>
				<div className="numberIncrement-num">{this.state.amount}</div>
				<button
					type="button"
					onClick={() => { this.onAdjustAmount(1); }}
					className="numberIncrement-change"
				>+</button>
				<div className="numberIncrement-title">
					{this.state.name}
				</div>
			</div>
		);
	}
}

NumberIncrement.propTypes = {
	name: React.PropTypes.string,
	amount: React.PropTypes.number,
	min: React.PropTypes.number,
	max: React.PropTypes.number,
	// milestones: React.PropTypes.arrayOf(React.PropTypes.string),
};

export default NumberIncrement;
