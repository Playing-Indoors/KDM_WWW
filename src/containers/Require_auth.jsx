import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export default function(ComposedComponent){
	class Authentication extends Component {
		componentWillMount(){
			if(!this.props.authenticated.authenticated){
				this.context.router.push('/login');
			}
		}
		componentWillUpdate(nextProps){
			if(!nextProps.authenticated.authenticated){
				this.context.router.push('/login');
			}
		}
		render(){
			return <ComposedComponent {...this.props} />
		}
	}
	Authentication.contextTypes = {
		router: PropTypes.object
	};
	function mapStateToProps(state){
		return {
			authenticated: state.authenticated
		};
	}
	return connect(mapStateToProps)(Authentication);
}
