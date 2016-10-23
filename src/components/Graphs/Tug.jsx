import React, { Component } from 'react';

// Called Tug Graph because its a tug of war. I dunno, couldn't think of the real name ;)
class List extends Component {
	constructor(props){
		super(props);
	}
	render() {
		return (
			<div className="tugGraph">
				<h3 className="tugGraph-title">{this.props.title}</h3>
				<div className="tugGraph-labels">
					<div className="tugGraph-label">
						<strong>{this.props.aValue}</strong>
						{this.props.aLabel}
					</div>
					<div className="tugGraph-label">
						<strong>{this.props.bValue}</strong>
						{this.props.bLabel}
					</div>
				</div>
				{/* I know the following is wrong... too lazy to fix right now. @Khoa? */}
				<progress className="tugGraph-progress" max="{this.props.total}" value="{this.props.aValue}"></progress>
				<div className="tugGraph-total">{this.props.total} Total {this.props.title} Created</div>
			</div>
		)
	}
}

export default List;
