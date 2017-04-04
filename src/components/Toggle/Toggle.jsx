import React from 'react';
import { Button, Row, Col } from 'reactstrap';
import Icon from '../../components/Icon/Icon';

/**
 * Simple boolean toggle
 * Hitting the button will change it to true or false
 */
class Toggle extends React.Component {
	constructor(props){
		super(props);
		this.handleTrue = this.handleTrue.bind(this);
		this.handleFalse = this.handleFalse.bind(this);
	}
	handleTrue(){
		this.props.updateToggle(true, this.props.for);
	}
	handleFalse(){
		this.props.updateToggle(false, this.props.for);
	}
	render(){
		return(
			<div className="toggle">
				<Row noGutters className="align-items-center">
					<Col>
						<div className="toggle-label">{this.props.label}</div>
					</Col>
					<Col xs="auto">
						{/* True button */}
						<Button color="link" onClick={this.handleTrue}>
							<Icon name="checkCircle" color={this.props.active ? 'yellow' : 'white'} />
						</Button>
						{/* False button */}
						<Button color="link" onClick={this.handleFalse}>
							<Icon name="closeCircle" color={this.props.active ? 'white' : 'yellow'} />
						</Button>
					</Col>
				</Row>
			</div>
		);
	}
}

Toggle.propTypes = {
	active: React.PropTypes.bool,
	label: React.PropTypes.string,
};

export default Toggle;
