import React from 'react';
import { Button, Row, Col } from 'reactstrap';
import Icon from '../../components/Icon/Icon';

/**
 * Simple boolean toggle
 * Hitting the button will change it to true or false
 */
const Toggle = ({ label, active }) => (
	<div className="toggle">
		<Row noGutters className="align-items-center">
			<Col>
				<div className="toggle-label">{label}</div>
			</Col>
			<Col xs="auto">
				{/* True button */}
				<Button color="link">
					<Icon name="checkCircle" color={active ? 'yellow' : 'white'} />
				</Button>
				{/* False button */}
				<Button color="link">
					<Icon name="closeCircle" color={active ? 'white' : 'yellow'} />
				</Button>
			</Col>
		</Row>
	</div>
);

Toggle.propTypes = {
	active: React.PropTypes.bool,
	label: React.PropTypes.string,
};

export default Toggle;
