import React from 'react';
import {connect} from 'react-redux';
import {getHome} from '../../actions/getHome';
import {bindActionCreators} from 'redux';
import CalebComponent from '../../components/CalebComponent/CalebComponent.jsx';

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
        <div className="home-logo">
          <p>KDM BITCHES</p>
          <p>This is data from JSON:</p>
          <p>{this.props.homeData.users[0].current_username}</p>
          <p> Custom Component for Caleb</p>
          <CalebComponent />
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
