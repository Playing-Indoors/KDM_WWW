import { GET_USER, SET_PREFERENCE } from "../actions/types";

export default function(state = null, action) {
  let userState;
  switch (action.type) {
    case GET_USER:
      return action.payload;
    case SET_PREFERENCE:
      console.log(state);
      console.log(action);
      const preferences = state.user.preferences;
      preferences[action.payload.handle] = action.payload.value;
      userState = Object.assign({}, state, {
        user: {
          preferences
        }
      });
      // state.userData.user.preferences[action.handle] = action.value;
      return userState;
    default:
      return state;
  }
}
