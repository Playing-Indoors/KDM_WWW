import { UPDATE_HEADER } from '../actions/types';

export default function(state = {}, action){
	switch(action.type){
		case UPDATE_HEADER:
			return {...state, showNav: true};
		default:
			return state;
	}
	return state;
}
