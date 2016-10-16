import React from 'react';
import {connect} from 'react-redux';
import {getHome} from '../../actions/getHome';
import {bindActionCreators} from 'redux';
import CalebComponent from '../../components/CalebComponent/CalebComponent.jsx';
import Nav from '../../components/Nav/Nav.jsx';
import Header from '../../components/Header/Header.jsx';
import List from '../../components/List/List.jsx';
import Button from '../../components/Button/Button.jsx';


class Home extends React.Component {
	constructor(props) {
		super(props);
	}
	componentWillMount(){
		this.props.getHome();
	}
	render() {
		if(this.props.homeData){
			return (
				<div className="page-home">
					<Nav data={this.props.homeData.nav} />
					<Header data={this.props.homeData.page} />
					<main className="main">
						<Button text="Create New Campaign" style="secondary" size="lg btn-block" />
						<List data={this.props.homeData.campaign} />
					</main>
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
	return {homeData: state.homeData};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		getHome: getHome
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
