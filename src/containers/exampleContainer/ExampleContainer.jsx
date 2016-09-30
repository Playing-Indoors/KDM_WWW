import React from 'react';
import {connect} from 'react-redux';
import {getExample} from '../../actions/redux_actions/getExample';
import {bindActionCreators} from 'redux';

class ExampleContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount(){
    //calls redux action on load
    //this.props.callReduxAction();
  }
  render() {
    return (
      <div> Example Redux Container </div>
    );
  }
}

//connects root reducer to props
function mapStateToProps(state) {
  return {dataFromRedux: state.dataFromRedux};
}

//connects redux actions to props
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    callReduxAction: getExample
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ExampleContainer);
