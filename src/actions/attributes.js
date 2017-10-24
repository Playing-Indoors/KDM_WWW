import axios from "axios";
import { browserHistory } from "react-router";

const KDM_API = require("KDM_API");

axios.defaults.headers.common["Content-Type"] = "application/json";

export function setAttributes(survivor_id, data) {
  return axios({
    method: "post",
    url: `${KDM_API}/survivor/set_attribute/${survivor_id}`,
    data: data
  });
}

export function setManyAttributes(survivor_id, data) {
  return axios({
    method: "post",
    url: `${KDM_API}/survivor/set_many_attributes/${survivor_id}`,
    data: data
  });
}

export function setSurvival(survivor_id, data) {
  return axios({
    method: "post",
    url: `${KDM_API}/survivor/set_survival/${survivor_id}`,
    data: data
  });
}
