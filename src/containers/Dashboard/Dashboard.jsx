import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Col } from 'reactstrap';
import { getSettlement } from '../../actions/getSettlement';
import Widget from '../../components/Widget/Widget';


class Dashboard extends React.Component {
	constructor(props){
		super(props);
	}
	componentDidMount(){
		this.props.getSettlement();
	}
	render() {
		return (
			<div>
				<h1>Settlement Name</h1>
				<Row>
					<Col>
						<Widget title="Lantern Year">3</Widget>
					</Col>
					<Col>
						<Widget title="Population">13</Widget>
					</Col>
					<Col>
						<Widget title="Milestones">3</Widget>
					</Col>
				</Row>
				<Row>
					<Col>
						<Widget title="Most Recent Milestone">Armored Survivors</Widget>
					</Col>
				</Row>
				<Row>
					<Col>
						<Widget title="Most Recent Death">Donald Clinton</Widget>
					</Col>
				</Row>
				<Row>
					<Col>
						<Widget title="Most Recent Birth">Hillary Trump</Widget>
					</Col>
				</Row>
				<Row>
					<Col>
						<Widget title="Most Recent Monster Quarry">The Watcher</Widget>
					</Col>
				</Row>
				<Row>
					<Col>
						<Widget title="Last 5 Records">
							<ol>
								<li>Something</li>
								<li>Something</li>
								<li>Something</li>
								<li>Something</li>
								<li>Something</li>
							</ol>
						</Widget>
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

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		getSettlement,
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
