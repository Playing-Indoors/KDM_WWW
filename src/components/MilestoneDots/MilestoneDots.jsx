import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import MilestoneDot from './MilestoneDot';

// TODO
// [ ] Hook up the milestones prop. example: milestones={[1, 3, 5, 7, 10]}

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
				return <MilestoneDot type={type} key={index} />
			})
		}
		return null;
	}
	render() {
		return (
			<div className="milestoneDots">
				{this.renderMilestones()}
			</div>
		);
	}
}

MilestoneDots.propTypes = {
	count: PropTypes.number,
	current: PropTypes.number,
	milestones: PropTypes.arrayOf(PropTypes.number),
};

MilestoneDots.defaultProps = {
	count: 1,
	current: 0,
	milestones: [],
}

export default MilestoneDots;
