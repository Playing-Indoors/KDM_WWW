import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Widget from '../../components/Widget/Widget';

class Timeline extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			settlementData: null
		};
	}
	componentWillReceiveProps(nextProps) {
		if (nextProps.settlementData) {
			this.setState({
				settlementData: nextProps.settlementData,
			});
		}
	}
	renderYear() {
		if (this.state.settlementData) {
			return this.state.settlementData.sheet.timeline.map((year) => {
				return (
					<Widget title={`Lantern Year ${year.year}`}>
						Endless Screams [115]
					</Widget>
				);
			});
		}
		return null;
	}
	render() {
		return (
			<div>
				{this.renderYear()}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		settlementData: state.settlementData,
	};
}

export default connect(mapStateToProps, null)(Timeline);
