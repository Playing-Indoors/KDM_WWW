import React, { Component } from 'react';
import { Button } from 'reactstrap';

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
					<a href={this.props.href} className="cardList-name">{this.props.name}</a>
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
	name: React.PropTypes.string,
	desc: React.PropTypes.string,
	href: React.PropTypes.string,
	button: React.PropTypes.string,
	children: React.PropTypes.node,
};

export default CardList;
