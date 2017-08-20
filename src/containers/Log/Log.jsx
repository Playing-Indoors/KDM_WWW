import { Button, Col, Row } from 'reactstrap';
import SurvivalLimit from '../../components/SurvivalLimit/SurvivalLimit'
import Widget from '../../components/Widget/Widget';;
import React, { Component } from 'react';

class Log extends Component {
	constructor(props){
		super(props);
	}
	render() {
		if(this.props.settlementData){
			return (
				<div className="layoutLog">
					<h1 className="text-center">{this.props.settlementData.sheet.name}</h1>
					<Button color="danger" block>Depart For Hunt</Button>

					<SurvivalLimit
						amount={5}
					/>

					<Widget title="Lantern Year">
						{this.props.settlementData.sheet.lantern_year}
					</Widget>

					<Widget title="Population">
						{this.props.settlementData.sheet.population}
					</Widget>

					<Widget title="Survival Limit">
						{this.props.settlementData.sheet.survival_limit}
					</Widget>

					<Widget title="Innovations">{this.props.settlementData.sheet.innovations.length}</Widget>

					<Widget title="Principles">{this.props.settlementData.sheet.principles.length}</Widget>

					<Widget title="Milestones">{this.props.settlementData.sheet.milestone_story_events.length}</Widget>

					<Widget title="Locations">{this.props.settlementData.sheet.locations.length}</Widget>

					<Widget title="Death Count">{this.props.settlementData.sheet.death_count}</Widget>

					<Widget title="Defeated Monsters">{this.props.settlementData.sheet.defeated_monsters.length}</Widget>

					<Widget title="Notes">~</Widget>

				</div>
			);
		}
		return null;
	}
}


export default Log;
