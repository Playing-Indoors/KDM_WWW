import { UPDATE_HEADER, CLOSE_HEADER } from '../actions/types';

export default function(state = {}, action){
	switch(action.type){
		case UPDATE_HEADER:
			return {...state, showNav: true};
		case CLOSE_HEADER:
			return {...state, showNav: false};
		default:
			return state;
	}
	return state;
}
