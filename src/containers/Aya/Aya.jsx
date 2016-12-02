import React from 'react';
import {connect} from 'react-redux';
import {getAya} from '../../actions/getAya';
import {bindActionCreators} from 'redux';


class Aya extends React.Component {
	constructor(props) {
		super(props);
	}
	componentWillMount(){
		this.props.getAya();
	}
	render() {
		if(this.props.ayaData){
			return (
				<div className="page-aya">
					test
				</div>
			);
		} else {
				return null;
		}
	}
}

// The BELOW IS REDUX DATA FLOW stuff , dont worry about it
// THIS IS HOW WE CALL THE API AND DO DATA FLOW, ILL EXPLAINS LATER
function mapStateToProps(state) {
	return {ayaData: state.ayaData};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		getAya: getAya
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Aya);
