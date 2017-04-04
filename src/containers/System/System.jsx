import React from 'react';
import Toggle from '../../components/Toggle/Toggle';
import Widget from '../../components/Widget/Widget';

class System extends React.Component {
	constructor(props){
		super(props);
		//fakeson not sure what the toggle data struture would look like, but should be flat when in this state
		this.state = {
			weapon_specialization: true,
			settlement_bonuses: false,
			story_events: true,
			endeavor_token: false,
			populate: true,
			enable_controls: true,
			log_out: false
		}
		this.updateToggle = this.updateToggle.bind(this);
	}
	updateToggle(bool, type){
		this.setState({
			[type]: bool
		});
	}
	render() {
		return (
			<div>
				<Widget title="Automation">
					<Toggle updateToggle={this.updateToggle} for="weapon_specialization" active={this.state.weapon_specialization} label="Automatically add weapon specilization if innovations include the mastery" />
					<Toggle updateToggle={this.updateToggle} active={this.state.settlement_bonuses} for="settlement_bonuses" label="Automatically apply settlement bonuses to newborn and current survivors where appropriate?" />
					<Toggle updateToggle={this.updateToggle} active={this.state.story_events} for="story_events" label="Automatically update timeline with milestone story events?" />
				</Widget>
				<Widget title="Settlement Summary">
					<Toggle updateToggle={this.updateToggle} active={this.state.endeavor_token} for="endeavor_token" label="Show endeavor token control on settlement summary view?" />
				</Widget>
				<Widget title="General">
					<Toggle updateToggle={this.updateToggle} active={this.state.populate} for="populate" label="Populate random names for new settlements and survivors?" />
					<Toggle updateToggle={this.updateToggle} active={this.state.enable_controls} for="enable_controls" label="Enable controls for removing settlements and survivors?" />
					<Toggle updateToggle={this.updateToggle} active={this.state.log_out} for="log_out" label="Automatically log me out after 24 hours of inactivity?" />
				</Widget>
			</div>
		);
	}
}

export default System;
