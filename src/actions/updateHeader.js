import { UPDATE_HEADER } from './types';

export function updateHeader() {
	return dispatch => {
		dispatch({
			type: UPDATE_HEADER
		});
	};
}
