import axios from "axios";
import { browserHistory } from "react-router";
const KDM_API = require("KDM_API");
axios.defaults.headers.common["Content-Type"] = "application/json";

export function setAssets(survivor_id, data) {
  return axios({
    method: "post",
    url: `${KDM_API}/survivor/add_game_asset/${survivor_id}`,
    data: data
  });
}

export function setManyAssets(survivor_id, data) {
  return axios({
    method: "post",
    url: `${KDM_API}/survivor/replace_game_assets/${survivor_id}`,
    data: data
  });
}
