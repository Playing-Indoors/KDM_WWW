import { browserHistory } from 'react-router';
import axios from 'axios';
import { AUTH_USER, AUTH_ERROR, UNAUTH_USER } from './types';

// TODO add auth endpoint here
// let _AUTH_API_ = "";

export function authError(error) {
	return {
		type: AUTH_ERROR,
		payload: error,
	};
}
export function authenticate({ username, password }) {
	return function(dispatch) {
		axios.post(`${_AUTH_API_}`, { username, password })
			.then(response => {
				dispatch({ type: AUTH_USER });
				localStorage.setItem('token', response.data.auth_token);
				browserHistory.push('/home');
			})
			.catch(() => {
				dispatch(authError(true));
			});
	};
}

export function signoutUser() {
	localStorage.removeItem('token');
	return { type: UNAUTH_USER };
}
