import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BoxList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			list: props.list,
		};
	}
	renderList() {
		return this.state.list.map((item, index) => {
			return <li key={index}>{item}</li>;
		});
	}
	render() {
		return (
			<ul className="boxList">
				{this.renderList()}
			</ul>
		);
	}
}

BoxList.propTypes = {
	list: PropTypes.arrayOf(PropTypes.string),
};

export default BoxList;
