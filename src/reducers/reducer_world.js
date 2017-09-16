import { GET_WORLD } from "../actions/types";

export default function(state = null, action) {
  switch (action.type) {
    case GET_WORLD:
      return action.payload;
    default:
      return state;
  }
}
