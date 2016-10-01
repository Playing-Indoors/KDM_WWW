import React from 'react';
import {connect} from 'react-redux';
import {getIndex} from '../../actions/getHome';
import {bindActionCreators} from 'redux';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount(){
    //this.props.getHome();
  }

  render() {
    return (
      <div className="home-logo">
        <p>KDM BITCHES</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {homeData: state.homeData};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getHome: getHome
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
