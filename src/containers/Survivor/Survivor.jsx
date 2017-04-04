import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Survivor extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			settlementData: null,
			survivor: null,
		};
	}
	componentWillReceiveProps(nextProps) {
		if (nextProps.settlementData) {
			let arr = _.filter(nextProps.settlementData.user_assets.survivors, (survivor) => {
				if(survivor.sheet._id.$oid === this.props.routeParams.id){
					return survivor;
				}
			});
			this.setState({
				settlementData: nextProps.settlementData,
				survivor: arr[0],
			});
		}
	}
	renderSurvivor() {
		if (this.state.survivor) {
			return (
				<div>
					{this.state.survivor.sheet.name}
					{this.state.survivor.sheet.Accuracy}
					{this.state.survivor.sheet.Arms}
					{this.state.survivor.sheet.Body}
				</div>
			);
		}
	}
	render() {
		return (
			<div>
				{this.renderSurvivor()}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		settlementData: state.settlementData,
	};
}

export default connect(mapStateToProps, null)(Survivor);
