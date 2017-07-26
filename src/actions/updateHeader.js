import { UPDATE_HEADER, CLOSE_HEADER } from './types';

export function updateHeader() {
	return (dispatch) => {
		dispatch({
			type: UPDATE_HEADER,
		});
	};
}

export function closeHeader() {
	return (dispatch) => {
		dispatch({
			type: CLOSE_HEADER,
		});
	};
}
