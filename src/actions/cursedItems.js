import axios from "axios";
import { browserHistory } from "react-router";
import { ADD_CURSED_ITEM, RM_CURSED_ITEM } from "./types.js";

const KDM_API = require("KDM_API");

export function addCursedItem(survivor_id, data) {
  return async dispatch => {
    await axios({
      method: "post",
      url: `${KDM_API}/survivor/add_cursed_item/${survivor_id}`,
      data: data
    }).then(res => {
      console.log("ADD CURSED ITEM RES", res);
      dispatch(addCursedItemAsync(data, survivor_id));
    });
  };
}
export function rmCursedItem(survivor_id, data) {
  return async dispatch => {
    await axios({
      method: "post",
      url: `${KDM_API}/survivor/rm_cursed_item/${survivor_id}`,
      data: data
    }).then(res => {
      console.log("RM CURSED ITEM RES", res);
      dispatch(rmCursedItemAsync(data, survivor_id));
    });
  };
}

function addCursedItemAsync(data, survivor_id) {
  return {
    survivor_id,
    type: ADD_CURSED_ITEM,
    payload: data
  };
}

function rmCursedItemAsync(data, survivor_id) {
  return {
    survivor_id,
    type: RM_CURSED_ITEM,
    payload: data
  };
}
