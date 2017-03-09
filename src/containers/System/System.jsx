import React from 'react';
import Toggle from '../../components/Toggle/Toggle';
import Widget from '../../components/Widget/Widget';

class System extends React.Component {
	render() {
		return (
			<div>
				<Widget title="Automation">
					<Toggle label="Automatically add weapon specilization if innovations include the mastery" />
					<Toggle label="Automatically apply settlement bonuses to newborn and current survivors where appropriate?" />
					<Toggle label="Automatically update timeline with milestone story events?" />
				</Widget>
				<Widget title="Settlement Summary">
					<Toggle label="Show endeavor token control on settlement summary view?" />
				</Widget>
				<Widget title="General">
					<Toggle label="Populate random names for new settlements and survivors?" />
					<Toggle label="Enable controls for removing settlements and survivors?" />
					<Toggle label="Automatically log me out after 24 hours of inactivity?" />
				</Widget>
			</div>
		);
	}
}

export default System;
