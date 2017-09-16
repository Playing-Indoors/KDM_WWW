import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import MilestoneDot from './MilestoneDot';

class MilestoneDots extends Component {
	constructor(props) {
		super(props);
	}
	renderMilestones() {
		if(this.props.count > 0) {
			return Array(this.props.count).fill().map((x, index) => {
				// TODO: replace mod with true event array
				// const IS_EVENT = index % 3 === 0;
				const IS_EVENT = false;
				const IS_FILLED = this.props.current > index;
				let type = 'default';
				// If milestone event happened
				if (IS_FILLED && IS_EVENT) {
					type = 'activeEvent';
				} else if (IS_EVENT) {
					type = 'defaultEvent';
				} else if (IS_FILLED) {
					type = 'active';
				}
				return <MilestoneDot type={type} key={index} mini={this.props.mini} />
			})
		}
		return null;
	}
	render() {
		return (
			<div
				className={classNames(
					'milestoneDots',
					{ 'milestoneDots--mini': this.props.mini },
				)}
			>{this.renderMilestones()}</div>
		);
	}
}

MilestoneDots.propTypes = {
	count: PropTypes.number,
	current: PropTypes.number,
	// milestones describe the style as well as emits and event
	milestones: PropTypes.arrayOf(PropTypes.number),
	mini: PropTypes.bool,
};

MilestoneDots.defaultProps = {
	count: 1,
	current: 0,
	milestones: [],
	mini: false,
};

export default MilestoneDots;
