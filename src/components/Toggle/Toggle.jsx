import React from 'react';
import { Button, Row, Col } from 'reactstrap';

// TODO
// - Make it so that you can pass a link/action if you click on it
// - If this is true then change the color of the header

const Toggle = ({ label }) => (
	<div className="toggle">
		<Row noGutters className="align-items-center">
			<Col>
				<div className="toggle-label">{label}</div>
			</Col>
			<Col xs="auto">
				<Button>Yes</Button>
				<Button>No</Button>
			</Col>
		</Row>
	</div>
);

Toggle.propTypes = {
	label: React.PropTypes.string,
};

export default Toggle;
