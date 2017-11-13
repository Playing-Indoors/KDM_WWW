import axios from "axios";

const KDM_API = require("KDM_API");

export function getLogs(id) {
  let auth = localStorage.getItem("access_token");
  let userId = localStorage.getItem("userId");
  return axios({
    headers: { Authorization: auth },
    method: "get",
    url: `${KDM_API}/settlement/get_event_log/${id}`
  });
}
