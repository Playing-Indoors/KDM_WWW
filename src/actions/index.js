import { browserHistory } from 'react-router';
import axios from 'axios';
import { AUTH_USER, AUTH_ERROR, UNAUTH_USER } from './types';
const KDM_API = require('KDM_API');

export function authError(error) {
	return {
		type: AUTH_ERROR,
		payload: error,
	};
}
export function authenticate({ username, password }) {
	return function(dispatch) {
		axios.defaults.headers.post['Content-Type'] = 'application/json';
		axios.defaults.headers.post['Authorization'] = {username, password};
		console.log(axios.defaults.headers);
		// axios({
		// 	method: 'post',
		// 	headers: {'Authorization': {'username': username, 'password': password}},
		// 	url: `${KDM_API}/login`,
		// }).then((res) => {
		// 	dispatch({ type: AUTH_USER });
		// 	localStorage.setItem('access_token', response.access_token);
		// 	browserHistory.push('/survivor');
		// });
		axios.post(`${KDM_API}/login`)
			.then(response => {
				dispatch({ type: AUTH_USER });
				localStorage.setItem('access_token', response.access_token);
				browserHistory.push('/survivor');
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
