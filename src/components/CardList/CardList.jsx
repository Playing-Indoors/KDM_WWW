import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import { Link } from 'react-router';

class CardList extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}
	// renderMeta() {
	// 	if (this.props.meta) {
	// 		return <div className="cardList-meta">{this.props.meta.join(' | ')}</div>;
	// 	}
	// 	return null;
	// }
	render() {
		return (
			<div className="cardList">
				<div className="cardList-content">
					<Link to={this.props.href} className="cardList-name">{this.props.name}</Link>
					<div className="cardList-desc">{this.props.desc}</div>
					<div className="cardList-meta">
						{ this.props.children }
					</div>
				</div>
				<Button>{this.props.button}</Button>
			</div>
		);
	}
}

CardList.defaultProps = {
	// name: 'Name',
	button: 'View',
	href: '#openCampaign',
	// desc: 'Description',
};

CardList.propTypes = {
	name: PropTypes.string,
	desc: PropTypes.string,
	href: PropTypes.string,
	button: PropTypes.string,
	children: PropTypes.node,
};

export default CardList;
