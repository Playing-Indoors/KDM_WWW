import { GET_SETTLEMENT, SET_MANY_ASSETS } from "../actions/types";

export default function(state = null, action) {
  switch (action.type) {
    case GET_SETTLEMENT:
      return action.payload;
    case SET_MANY_ASSETS:
      let index = state.user_assets.survivors.map((el)=>{
        return el.sheet._id.$oid;
      }).indexOf(action.survivor_id);
      let newSurvivors = state.user_assets.survivors;
      newSurvivors[index] = action.payload;
      let settlement = Object.assign({}, state, {
          user_assets: {
            players: state.user_assets.players,
            survivors: newSurvivors
          }
        }
      );
      return settlement;
    default:
      return state;
  }
}
