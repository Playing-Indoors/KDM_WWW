import {
  GET_SURVIVOR
} from '../actions/types';

export default function(state=null, action) {
  switch (action.type) {
    case GET_SURVIVOR:
      return action.payload;
    default:
      return state;
  };
}
