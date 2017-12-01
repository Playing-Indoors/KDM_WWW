import axios from "axios";

const KDM_API = require("KDM_API");

export function setPreference(user_id, data) {
  return axios({
    method: "post",
    url: `${KDM_API}/user/set_preferences/${user_id}`,
    data: data
  });
}
