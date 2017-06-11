import React, { Component } from 'react';
import PropTypes from 'prop-types';

// TODO
// [ ] Better format this so that the width doesn't change on increment/decrement
// [ ] Add support for H, L

class NumberIncrement extends Component {
	constructor(props) {
		super(props);
		this.state = {
			amount: props.amount || 0,
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
		newAmount = Math.min(Math.max(newAmount, this.props.min), this.props.max);
		// console.log(`${this.props.name} changed from ${this.state.amount} to ${newAmount}`);
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
					{this.props.name}
				</div>
			</div>
		);
	}
}

NumberIncrement.defaultProps = {
	min: -999,
	max: 999,
};

NumberIncrement.propTypes = {
	name: PropTypes.string,
	amount: PropTypes.number,
	min: PropTypes.number,
	max: PropTypes.number,
	// milestones: PropTypes.arrayOf(PropTypes.string),
};

export default NumberIncrement;
