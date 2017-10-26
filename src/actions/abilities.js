import axios from "axios";
import { SET_MANY_ASSETS } from "./types.js";
import { browserHistory } from "react-router";

const KDM_API = require("KDM_API");

export function setAssets(survivor_id, data) {
  return axios({
    method: "post",
    url: `${KDM_API}/survivor/add_game_asset/${survivor_id}`,
    data: data
  });
}

export function setManyAssets(survivor_id, data) {
  return async dispatch => {
    await axios({
      method: "post",
      url: `${KDM_API}/survivor/replace_game_assets/${survivor_id}`,
      data: data
    }).then(res => {
      console.log("assets", res);
      dispatch(setManyAssetsAsync(res.data, survivor_id));
      return true;
    });
  };
}

function setManyAssetsAsync(data, survivor_id) {
  return {
    survivor_id,
    type: SET_MANY_ASSETS,
    payload: data
  };
}
