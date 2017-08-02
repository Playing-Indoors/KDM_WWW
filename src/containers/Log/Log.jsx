import { Button, Col, Row } from 'reactstrap';
import Widget from '../../components/Widget/Widget';
import React, { Component } from 'react';

class Log extends Component {
	constructor(props){
		super(props);
	}
	render() {
		if(this.props.settlementData){
			return (
				<div>
					<h1>{this.props.settlementData.sheet.campaign}</h1>
					<Row>
						<Col>
							<Widget title="Lantern Year">{this.props.settlementData.sheet.lantern_year}</Widget>
						</Col>
						<Col>
							<Widget title="Population">{this.props.settlementData.sheet.population}</Widget>
						</Col>
						<Col>
							<Widget title="Milestones">{this.props.settlementData.sheet.milestone_story_events.length}</Widget>
						</Col>
					</Row>
					<Row>
						<Col>
							<Widget title="Most Recent Milestone">{this.props.settlementData.sheet.milestone_story_events[this.props.settlementData.sheet.milestone_story_events.length -1]}</Widget>
						</Col>
					</Row>
					<Row>
						<Col>
							<Widget title="Most Recent Death">[Survivor Name]</Widget>
						</Col>
					</Row>
					<Row>
						<Col>
							<Widget title="Most Recent Birth">[Survivor Name]</Widget>
						</Col>
					</Row>
					<Row>
						<Col>
							<Widget title="Most Recent Monster Quarry">{this.props.settlementData.sheet.quarries[this.props.settlementData.sheet.quarries.length-1] }</Widget>
						</Col>
					</Row>
					<Row>
						<Col>
							<Widget title="Last 5 logs">[Last 5 logs]</Widget>
						</Col>
					</Row>
				</div>
			);
		} else {
			return null;
		}
	}
}


export default Log;
