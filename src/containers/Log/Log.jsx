import { Button } from 'reactstrap';
import React, { Component } from 'react';
import Innovations from '../../components/Innovations/Innovations';
import SurvivalLimit from '../../components/SurvivalLimit/SurvivalLimit';
import LanternYear from '../../components/LanternYear/LanternYear';
import Population from '../../components/Population/Population';
import Principles from '../../components/Principles/Principles';
import Milestones from '../../components/Milestones/Milestones';
import Locations from '../../components/Locations/Locations';
import DeathCount from '../../components/DeathCount/DeathCount';
import DefeatedMonsters from '../../components/DefeatedMonsters/DefeatedMonsters';
import Notes from '../../components/Notes/Notes';

class Log extends Component {
	render() {
		if (this.props.settlementData) {
			return (
				<div className="layoutLog">
					<h1 className="text-center">{this.props.settlementData.sheet.name}</h1>
					<Button color="danger" block>Depart For Hunt</Button>

					<SurvivalLimit
						amount={5}
					/>

					<LanternYear
						amount={this.props.settlementData.sheet.lantern_year}
					/>

					<Population
						amount={this.props.settlementData.sheet.population}
					/>

					<Innovations
						list={this.props.settlementData.sheet.innovations}
					/>

					<Principles
						amount={this.props.settlementData.sheet.principles.length}
					/>

					<Milestones
						amount={this.props.settlementData.sheet.milestone_story_events.length}
					/>

					<Locations
						amount={this.props.settlementData.sheet.locations.length}
					/>

					<DeathCount
						amount={this.props.settlementData.sheet.death_count}
					/>

					<DefeatedMonsters
						amount={this.props.settlementData.sheet.defeated_monsters.length}
					/>

					<Notes />

				</div>
			);
		}
		return null;
	}
}


export default Log;
