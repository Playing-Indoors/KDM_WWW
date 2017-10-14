import { Button } from "reactstrap";
import React, { Component } from "react";
import Innovations from "../Settlement/_Innovations";
import SurvivalLimit from "../Settlement/_SurvivalLimit";
import LanternYear from "../Settlement/_Year";
import Population from "../Settlement/_Population";
import Principles from "../Settlement/_Principles";
import Milestones from "../Settlement/_Milestones";
import Locations from "../Settlement/_Locations";
import DeathCount from "../Settlement/_Deaths";
import DefeatedMonsters from "../Settlement/_Monsters";
import Notes from "../Settlement/_Notes";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

class Log extends Component {
  render() {
    if (this.props.settlementData) {
      return (
        <div className="layoutLog">
          <h1 className="text-center">
            {this.props.settlementData.sheet.name}
          </h1>
          <Button color="danger" block>
            Depart For Hunt
          </Button>

          <SurvivalLimit amount={5} />

          <LanternYear amount={this.props.settlementData.sheet.lantern_year} />

          <Population amount={this.props.settlementData.sheet.population} />

          <Innovations list={this.props.settlementData.sheet.innovations} />

          <Principles
            amount={this.props.settlementData.sheet.principles.length}
          />

          <Milestones
            amount={
              this.props.settlementData.sheet.milestone_story_events.length
            }
          />

          <Locations
            amount={this.props.settlementData.sheet.locations.length}
          />

          <DeathCount amount={this.props.settlementData.sheet.death_count} />

          <DefeatedMonsters
            amount={this.props.settlementData.sheet.defeated_monsters.length}
          />

          <Notes />
        </div>
      );
    }
    return <LoadingSpinner />;
  }
}

export default Log;
