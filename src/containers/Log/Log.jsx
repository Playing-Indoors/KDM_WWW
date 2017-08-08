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
					<h1>{this.props.settlementData.sheet.name}</h1>
					<Row>
						<Col>
							<Button color="danger" block>Depart For Hunt</Button>
						</Col>
					</Row>
					<br />
					<Row>
						<Col>
							<Widget title="Survival Limit">{this.props.settlementData.sheet.survival_limit}</Widget>
						</Col>
						<Col>
							<Widget title="Lantern Year">{this.props.settlementData.sheet.lantern_year}</Widget>
						</Col>
						<Col>
							<Widget title="Population">{this.props.settlementData.sheet.population}</Widget>
						</Col>
					</Row>
					<Row>
						<Col>
							<Widget title="Innovations">{this.props.settlementData.sheet.innovations.length}</Widget>
						</Col>
						<Col>
							<Widget title="Principles">{this.props.settlementData.sheet.principles.length}</Widget>
						</Col>
						<Col>
							<Widget title="Milestones">{this.props.settlementData.sheet.milestone_story_events.length}</Widget>
						</Col>
					</Row>

					<Row>
						<Col>
							<Widget title="Locations">{this.props.settlementData.sheet.locations.length}</Widget>
						</Col>
						<Col>
							<Widget title="Death Count">{this.props.settlementData.sheet.death_count}</Widget>
						</Col>
						<Col>
							<Widget title="Defeated Monsters">{this.props.settlementData.sheet.defeated_monsters.length}</Widget>
						</Col>
					</Row>
					<Row>
						<Col>
							<Widget title="Notes">~</Widget>
							{/* <Widget title="Notes">{this.props.settlementData.sheet.settlement_notes}</Widget> */}
						</Col>
					</Row>
				</div>
			);
		}
		return null;
	}
}


export default Log;
