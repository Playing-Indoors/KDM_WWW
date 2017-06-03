import React, { Component } from 'react';
import Stats from '../../components/Stats/Stats';
import StatAdjust from '../../components/Stats/StatAdjust';
import StatBox from '../../components/Stats/StatBox';

class SurvivorStats extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showModal: false,
			name: 'Primary Stats',
		};
		this.handleModal = this.handleModal.bind(this);
	}
	handleModal() {
		this.setState({
			showModal: !this.state.showModal,
		});
	}
	render() {
		return (
			<StatBox
				myClass="survivorStats"
				name={this.state.name}
				stats={
					<div className="statGroup">
						<Stats
							name="Movement"
							amount={this.props.movement}
							max={1000}
							min={-1000}
						/>
						<Stats
							name="Accuracy"
							amount={this.props.accuracy}
							max={1000}
							min={-1000}
						/>
						<Stats
							name="Strength"
							amount={this.props.strength}
							max={1000}
							min={-1000}
						/>
						<Stats
							name="Evasion"
							amount={this.props.evasion}
							max={1000}
							min={-1000}
						/>
						<Stats
							name="Luck"
							amount={this.props.luck}
							max={1000}
							min={-1000}
						/>
						<Stats
							name="Speed"
							amount={this.props.speed}
							max={1000}
							min={-1000}
						/>
					</div>
				}
				modalBody={
					<div className="statSpendGroup">
						<StatAdjust
							name="Movement"
							amount={this.props.movement}
							max={1000}
							min={-1000}
						/>
						<StatAdjust
							name="Accuracy"
							amount={this.props.accuracy}
							max={1000}
							min={-1000}
						/>
						<StatAdjust
							name="Strength"
							amount={this.props.strength}
							max={1000}
							min={-1000}
						/>
						<StatAdjust
							name="Evasion"
							amount={this.props.evasion}
							max={1000}
							min={-1000}
						/>
						<StatAdjust
							name="Luck"
							amount={this.props.luck}
							max={1000}
							min={-1000}
						/>
						<StatAdjust
							name="Speed"
							amount={this.props.speed}
							max={1000}
							min={-1000}
						/>
					</div>
				}
			/>
		);
	}
}

SurvivorStats.propTypes = {
	movement: React.PropTypes.number,
	accuracy: React.PropTypes.number,
	strength: React.PropTypes.number,
	evasion: React.PropTypes.number,
	luck: React.PropTypes.number,
	speed: React.PropTypes.number,
};

export default SurvivorStats;
