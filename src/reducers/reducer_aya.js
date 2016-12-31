import { GET_AYA } from '../actions/types';

export default function (state = null, action) {
  switch (action.type) {
    case GET_AYA:
      return action.payload;
    default:
      return state;
  }
}
