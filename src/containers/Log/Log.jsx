import React from 'react';
import { Button, Col, Row } from 'reactstrap';
import Widget from '../../components/Widget/Widget';

class Log extends React.Component {
	render() {
		return (
			<div>
				<h1>[Campaign Name]</h1>
				<Row>
					<Col>
						<Widget title="Lantern Year">[3]</Widget>
					</Col>
					<Col>
						<Widget title="Population">[13]</Widget>
					</Col>
					<Col>
						<Widget title="Milestones">[3]</Widget>
					</Col>
				</Row>
				<Row>
					<Col>
						<Widget title="Most Recent Milestone">[Milestone Name]</Widget>
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
						<Widget title="Most Recent Monster Quarry">[Monster Name]</Widget>
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

export default Log;
