import {
  GET_SETTLEMENT,
  SET_MANY_ASSETS,
  SET_SURVIVAL,
  SET_ATTRIBUTES,
  SET_MANY_ARMOR,
  SET_MANY_ATTRIBUTES,
  SET_BLEEDING,
  SET_SEX,
  SET_NOTE,
  ADD_CURSED_ITEM,
  RM_CURSED_ITEM
} from "../actions/types";
import _ from "lodash";

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
    case SET_MANY_ARMOR:
      index = state.user_assets.survivors
        .map(el => {
          return el.sheet._id.$oid;
        })
        .indexOf(action.survivor_id);
      newSurvivors = state.user_assets.survivors;
      for (var i = 0; i < action.payload.attributes.length; i++) {
        newSurvivors[index].sheet[action.payload.attributes[i].attribute] =
          action.payload.attributes[i].value;
      }
      settlement = Object.assign({}, state, {
        user_assets: {
          players: state.user_assets.players,
          survivors: newSurvivors
        }
      });
      return settlement;
    case SET_MANY_ATTRIBUTES:
      index = state.user_assets.survivors
        .map(el => {
          return el.sheet._id.$oid;
        })
        .indexOf(action.survivor_id);
      newSurvivors = state.user_assets.survivors;
      for (var i = 0; i < action.payload.attributes.length; i++) {
        newSurvivors[index].sheet[action.payload.attributes[i].attribute] =
          action.payload.attributes[i].value;
      }
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
    case SET_BLEEDING:
      index = state.user_assets.survivors
        .map(el => {
          return el.sheet._id.$oid;
        })
        .indexOf(action.survivor_id);
      newSurvivors = state.user_assets.survivors;
      newSurvivors[index].sheet.bleeding_tokens = action.payload.value;
      settlement = Object.assign({}, state, {
        user_assets: {
          players: state.user_assets.players,
          survivors: newSurvivors
        }
      });
      return settlement;
    case SET_SEX:
      index = state.user_assets.survivors
        .map(el => {
          return el.sheet._id.$oid;
        })
        .indexOf(action.survivor_id);
      newSurvivors = state.user_assets.survivors;
      newSurvivors[index].sheet.sex = action.payload.sex;
      settlement = Object.assign({}, state, {
        user_assets: {
          players: state.user_assets.players,
          survivors: newSurvivors
        }
      });
      return settlement;
    case SET_NOTE:
      index = state.user_assets.survivors
        .map(el => {
          return el.sheet._id.$oid;
        })
        .indexOf(action.survivor_id);
      newSurvivors = state.user_assets.survivors;
      newSurvivors[index].sheet.notes.push(action.payload.notes);
      settlement = Object.assign({}, state, {
        user_assets: {
          players: state.user_assets.players,
          survivors: newSurvivors
        }
      });
      return settlement;
    case SET_ATTRIBUTES:
      index = state.user_assets.survivors
        .map(el => {
          return el.sheet._id.$oid;
        })
        .indexOf(action.survivor_id);
      newSurvivors = state.user_assets.survivors;
      newSurvivors[index].sheet[action.payload.attribute] =
        action.payload.value;
      settlement = Object.assign({}, state, {
        user_assets: {
          players: state.user_assets.players,
          survivors: newSurvivors
        }
      });
      return settlement;
    case ADD_CURSED_ITEM:
      index = state.user_assets.survivors
        .map(el => {
          return el.sheet._id.$oid;
        })
        .indexOf(action.survivor_id);
      newSurvivors = state.user_assets.survivors;
      newSurvivors[index].sheet.cursed_items.push(action.payload.handle);
      settlement = Object.assign({}, state, {
        user_assets: {
          players: state.user_assets.players,
          survivors: newSurvivors
        }
      });
      return settlement;
    case RM_CURSED_ITEM:
      index = state.user_assets.survivors
        .map(el => {
          return el.sheet._id.$oid;
        })
        .indexOf(action.survivor_id);
      newSurvivors = state.user_assets.survivors;
      newSurvivors[index].sheet.cursed_items = _.without(
        newSurvivors[index].sheet.cursed_items,
        action.payload.handle
      );
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
