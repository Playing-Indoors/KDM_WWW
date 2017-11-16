import axios from "axios";
const KDM_API = require("KDM_API");

export function addInnovation(settlement_id, data) {
  return axios({
    method: "post",
    url: `${KDM_API}/settlement/add_innovation/${settlement_id}`,
    data: data
  });
}
export function removeInnovation(settlement_id, data) {
  return axios({
    method: "post",
    url: `${KDM_API}/settlement/rm_innovation/${settlement_id}`,
    data: data
  });
}
