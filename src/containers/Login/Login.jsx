import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {reduxForm} from 'redux-form';
import { authenticate } from '../../actions/index.js';

class Login extends Component {
  constructor(props){
    super(props);
  }
  componentWillMount(){
    localStorage.clear();
  }
  handleFormSubmit({username, password}) {
    this.props.authenticate({username, password});
  }
  render() {
    const {
      handleSubmit,
      fields: {
        username,
        password
      }
    } = this.props;
    return (
      <div className="login-container">
        <div className="form-container">
          {this.props.authenticated.error ? <h2>Woops, bad info. Try again.</h2> : <h1>Welcome to KDM</h1>}
          <form className="login-form" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
            <input {...username} type="text" placeholder="Username"/>
            <input {...password} type="password" placeholder="Password"/>
            <button type="submit" id="login-button">Login</button>
          </form>
        </div>
        <ul className="bg-bubbles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.authenticated
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    authenticate: authenticate
  }, dispatch);
}

export default reduxForm({
  form: 'signin',
  fields: ['username', 'password']
}, mapStateToProps, mapDispatchToProps)(Login);
