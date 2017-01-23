import {
	GET_SETTLEMENT
} from '../actions/types';

export default function(state=null, action) {
	switch (action.type) {
		case GET_SETTLEMENT:
			return action.payload;
		default:
			return state;
	};
}
