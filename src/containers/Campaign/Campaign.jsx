import React from 'react';
import CardList from '../../components/CardList/CardList';

class Campaign extends React.Component {
	render() {
		return (
			<div>
				<CardList
					name="Campaing Name"
					desc="People of the Lantern (Campaign Rules)"
					href="#route"
					meta={['Lantern Year 4', 'Population 15', 'Players 3']}
				/>
				<CardList
					name="Campaing Name"
					desc="People of the Lantern (Campaign Rules)"
					href="#route"
					meta={['Lantern Year 4', 'Population 15', 'Players 3']}
				/>
				<CardList
					name="Campaing Name"
					desc="People of the Lantern (Campaign Rules)"
					href="#route"
					meta={['Lantern Year 4', 'Population 15', 'Players 3']}
				/>
			</div>
		);
	}
}

export default Campaign;
