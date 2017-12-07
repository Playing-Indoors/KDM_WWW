import {
  GET_SETTLEMENT,
  SET_MANY_ASSETS,
  SET_SURVIVAL,
  SET_ATTRIBUTES,
  SET_MANY_ARMOR,
  SET_MANY_ATTRIBUTES,
  SET_BLEEDING,
  SET_RETIRED,
  SET_SEX,
  SET_NAME,
  SET_NOTE,
  RM_NOTE,
  ADD_CURSED_ITEM,
  RM_CURSED_ITEM,
  SET_PROFICIENCY,
  ADD_FAVORITE,
  RM_FAVORITE,
  CONTROLS_OF_DEATH
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
    case SET_RETIRED:
      index = state.user_assets.survivors
        .map(el => {
          return el.sheet._id.$oid;
        })
        .indexOf(action.survivor_id);
      newSurvivors = state.user_assets.survivors;
      newSurvivors[index].sheet.retired = action.payload.retired;
      settlement = Object.assign({}, state, {
        user_assets: {
          players: state.user_assets.players,
          survivors: newSurvivors
        }
      });
      return settlement;
    case SET_NAME:
      index = state.user_assets.survivors
        .map(el => {
          return el.sheet._id.$oid;
        })
        .indexOf(action.survivor_id);
      newSurvivors = state.user_assets.survivors;
      newSurvivors[index].sheet.name = action.payload.name;
      settlement = Object.assign({}, state, {
        user_assets: {
          players: state.user_assets.players,
          survivors: newSurvivors
        }
      });
      return settlement;
    case SET_NOTE:
      index = state.user_assets.survivors
        .map(el => el.sheet._id.$oid)
        .indexOf(action.survivor_id);
      newSurvivors = state.user_assets.survivors;
      newSurvivors[index].notes.push(action.payload.note);
      settlement = Object.assign({}, state, {
        user_assets: {
          players: state.user_assets.players,
          survivors: newSurvivors
        }
      });
      return settlement;
    case RM_NOTE:
      index = state.user_assets.survivors
        .map(el => el.sheet._id.$oid)
        .indexOf(action.survivor_id);
      newSurvivors = state.user_assets.survivors;
      newSurvivors[index].notes = _.without(
        newSurvivors[index].notes,
        action.payload.note
      );
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
    case SET_PROFICIENCY:
      index = state.user_assets.survivors
        .map(el => {
          return el.sheet._id.$oid;
        })
        .indexOf(action.survivor_id);
      newSurvivors = state.user_assets.survivors;
      newSurvivors[index].sheet.weapon_proficiency_type = action.payload.handle;
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
    case ADD_FAVORITE:
      index = state.user_assets.survivors
        .map(el => {
          return el.sheet._id.$oid;
        })
        .indexOf(action.survivor_id);
      newSurvivors = state.user_assets.survivors;
      newSurvivors[index].sheet.favorite.push(action.payload.user_email);
      settlement = Object.assign({}, state, {
        user_assets: {
          players: state.user_assets.players,
          survivors: newSurvivors
        }
      });
      return settlement;
    case RM_FAVORITE:
      index = state.user_assets.survivors
        .map(el => {
          return el.sheet._id.$oid;
        })
        .indexOf(action.survivor_id);
      newSurvivors = state.user_assets.survivors;
      newSurvivors[index].sheet.favorite = _.without(
        newSurvivors[index].sheet.favorite,
        action.payload.user_email
      );
      settlement = Object.assign({}, state, {
        user_assets: {
          players: state.user_assets.players,
          survivors: newSurvivors
        }
      });
      return settlement;
    case CONTROLS_OF_DEATH:
      index = state.user_assets.survivors
        .map(el => {
          return el.sheet._id.$oid;
        })
        .indexOf(action.survivor_id);
      newSurvivors = state.user_assets.survivors;
      newSurvivors[index].sheet.dead = action.payload.dead;
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
