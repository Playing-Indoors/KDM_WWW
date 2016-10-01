import {
  GET_HOME
} from '../actions/types';

export default function(state=null, action) {
  switch (action.type) {
    case GET_HOME:
      return action.payload;
    default:
      return state;
  };
}
