import {
  GET_SETTLEMENT,
  SET_MANY_ASSETS,
  SET_SURVIVAL
} from "../actions/types";

export default function(state = null, action) {
  let index, newSurvivors, settlement;
  switch (action.type) {
    case GET_SETTLEMENT:
      return action.payload;
    case SET_MANY_ASSETS:
      index = state.user_assets.survivors
        .map(el => {
          return el.sheet._id.$oid;
        })
        .indexOf(action.survivor_id);
      newSurvivors = state.user_assets.survivors;
      newSurvivors[index] = action.payload;
      settlement = Object.assign({}, state, {
        user_assets: {
          players: state.user_assets.players,
          survivors: newSurvivors
        }
      });
      return settlement;
    case SET_SURVIVAL:
      index = state.user_assets.survivors
        .map(el => {
          return el.sheet._id.$oid;
        })
        .indexOf(action.survivor_id);
      newSurvivors = state.user_assets.survivors;
      newSurvivors[index].sheet.survival = action.payload.value;
      settlement = Object.assign({}, state, {
        user_assets: {
          players: state.user_assets.players,
          survivors: newSurvivors
        }
      });
      return settlement;
    default:
      return state;
  }
}
