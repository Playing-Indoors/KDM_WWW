import { GET_HOME } from './types';
// TODO fakeson delete
import fakeson from '../../fakeson';

// TODO add api enpoint here
// const ROOT_URL = 'http://kdm-api-endpint.io';

export function getHome() {
	// Pass token to endpoint here
	return dispatch => {
		// AJAX CALL HAPPENS HERE
		dispatch(getHomeAsync(fakeson));
	};
}

function getHomeAsync(data) {
	return {
		type: GET_HOME,
		payload: data,
	};
}
