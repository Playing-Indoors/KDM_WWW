import React from 'react';
import CardList from '../../components/CardList/CardList';

class Survivors extends React.Component {
	componentDidMount(){
		let path = this.props.location.pathname.match(/^\/settlements\/(\d+)/);
		console.log(path[1]);
	}
	render() {
		return (
			<div>
				<CardList
					name="Survivor Name"
					desc="Hunt XP: 10"
					href="#route"
				/>
				<CardList
					name="Survivor Name"
					desc="Hunt XP: 10"
					href="#route"
				/>
				<CardList
					name="Survivor Name"
					desc="Hunt XP: 10"
					href="#route"
				/>
			</div>
		);
	}
}

export default Survivors;
