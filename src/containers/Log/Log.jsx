import { Button, Col, Row } from 'reactstrap';
import Widget from '../../components/Widget/Widget';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getSettlement } from '../../actions/getSettlement';

class Log extends Component {
	constructor(props){
		super(props);
		this.state = {
			campaignName: null,
			lanternYear: null,
			population: null,
			milestones: null,
			recentMilestone: null,
			recentDeath: null,
			recentBirth: null,
			recentQuarry: null,
			lastLog: null
		}
	}
	componentWillReceiveProps(nextProps){
		if(nextProps.settlementData){
			this.setState({
				campaignName: nextProps.settlementData.sheet.campaign,
				lanternYear: nextProps.settlementData.sheet.lantern_year,
				population: nextProps.settlementData.sheet.population,
				milestones: nextProps.settlementData.sheet.milestone_story_events.length,
				recentMilestone: nextProps.settlementData.sheet.milestone_story_events[nextProps.settlementData.sheet.milestone_story_events.length -1],
				recentDeath: null,
				recentBirth: null,
				recentQuarry: nextProps.settlementData.sheet.quarries[nextProps.settlementData.sheet.quarries.length-1],
				lastLog: null
			})
		}
	}
	render() {
		return (
			<div>
				<h1>{this.state.campaignName}</h1>
				<Row>
					<Col>
						<Widget title="Lantern Year">{this.state.lanternYear}</Widget>
					</Col>
					<Col>
						<Widget title="Population">{this.state.population}</Widget>
					</Col>
					<Col>
						<Widget title="Milestones">{this.state.milestones}</Widget>
					</Col>
				</Row>
				<Row>
					<Col>
						<Widget title="Most Recent Milestone">{this.state.recentMilestone}</Widget>
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
						<Widget title="Most Recent Monster Quarry">{this.state.recentQuarry}</Widget>
					</Col>
				</Row>
				<Row>
					<Col>
						<Widget title="Last 5 logs">[Last 5 logs]</Widget>
					</Col>
				</Row>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		settlementData: state.settlementData,
	};
}

export default connect(mapStateToProps, null)(Log);
