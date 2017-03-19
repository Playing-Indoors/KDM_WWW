import React from 'react';
import { Button, Col, Row } from 'reactstrap';
import Widget from '../../components/Widget/Widget';

class Resources extends React.Component {
	render() {
		return (
			<div>
				<Row>
					<Col>
						<Widget title="Bone">3</Widget>
					</Col>
					<Col>
						<Widget title="Hide">13</Widget>
					</Col>
					<Col>
						<Widget title="Organ">3</Widget>
					</Col>
				</Row>
				<Row>
					<Col>
						<Widget title="Scrap">3</Widget>
					</Col>
					<Col>
						<Widget title="Consumable">13</Widget>
					</Col>
					<Col>
						<Widget title="Flower">3</Widget>
					</Col>
				</Row>
				<Row>
					<Col>
						<Widget title="Herb">3</Widget>
					</Col>
					<Col>
						<Widget title="Iron">13</Widget>
					</Col>
					<Col>
						<Widget title="Silk">3</Widget>
					</Col>
				</Row>
				<Row>
					<Col>
						<Widget title="Basic Resources">
							<ul>
								<li>Skull x2</li>
								<li>Organ x3</li>
								<li>Scrap x1</li>
							</ul>
						</Widget>
					</Col>
				</Row>
				<Row>
					<Col>
						<Widget title="White Lion Resources">
							<ul>
								<li>Testies x1</li>
							</ul>
						</Widget>
					</Col>
				</Row>
				<Row>
					<Col>
						<Widget title="Strange Resources">
							<ul>
								<li>Iron x2</li>
							</ul>
						</Widget>
					</Col>
				</Row>
				<Row>
					<Col>
						<Button color="danger" block>Archive Resources</Button>
					</Col>
				</Row>
			</div>
		);
	}
}

export default Resources;
