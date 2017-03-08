import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getSettlement } from '../../actions/getSettlement';

class Settlement extends React.Component {
	constructor(props){
		super(props);
	}
	componentDidMount(){
		this.props.getSettlement();
	}
	render() {
		return (
			<div>
				Settlement page
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

export default connect(mapStateToProps, mapDispatchToProps)(Settlement);
