import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DataList extends Component {
	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 	};
	// }
	handleRemove() {
		this.props.updateList(['a', 'b']);
	}
	renderItem() {
		return this.props.list.map((item, index) => (
			<li
				className="dataList"
				key={index}
			>
				{item}
				<button onClick={this.handleRemove}>x</button>
			</li>
		));
	}
	render() {
		if (this.props.list.length === 0) {
			return null;
		}
		return (
			<ol className="dataLists">
				{this.renderItem()}
			</ol>
		);
	}
}

DataList.defaultProps = {
	list: [],
};

DataList.propTypes = {
	list: PropTypes.arrayOf(PropTypes.string),
	updateList: PropTypes.func,
};

export default DataList;
