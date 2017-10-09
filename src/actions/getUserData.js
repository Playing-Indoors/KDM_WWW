import axios from "axios";
import { GET_USER } from "./types";

const KDM_API = require("KDM_API");

axios.defaults.headers.common["Content-Type"] = "application/json";

function getUserAsync(data) {
  return {
    type: GET_USER,
    payload: data
  };
}

export function getUser() {
  return dispatch => {
    let auth = localStorage.getItem("access_token");
    let userId = localStorage.getItem("userId");
    axios({
      headers: { Authorization: auth },
      method: "get",
      url: `${KDM_API}/user/dashboard/${userId}`
    }).then(res => {
      dispatch(getUserAsync(res.data));
    });
  };
}

export function setCurrentSettlement(id) {
  let auth = localStorage.getItem("access_token");
  let userId = localStorage.getItem("userId");
  let data = { current_settlement: id };
  return axios({
    headers: { Authorization: auth },
    method: "get",
    url: `${KDM_API}/user/set/${userId}`,
    data: data
  });
}
