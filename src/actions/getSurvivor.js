import axios from "axios";
import { GET_SURVIVOR, CREATE_SURVIVOR } from "./types";

const KDM_API = require("KDM_API");

function getSurvivorAsync(data) {
  return {
    type: GET_SURVIVOR,
    payload: data.sheet
  };
}
function createSurvivorAsync(data) {
  return {
    type: CREATE_SURVIVOR,
    payload: data.sheet
  };
}

export function getSurvivor() {
  return dispatch => {
    axios({
      method: "post",
      // url: `${KDM_API}/survivor/get/56de585d421aa91a9e10e91e`
      url: `${KDM_API}/survivor/get/5827ae438740d92d907d1d3d`
    }).then(res => {
      console.log("SURVIVOR", res);
      dispatch(getSurvivorAsync(res.data));
    });
  };
}

export function createSurvivor(settlementId, data) {
  let auth = localStorage.getItem("access_token");
  let userId = localStorage.getItem("userId");
  return axios({
    method: "post",
    url: `${KDM_API}/new/survivor`,
    data: {
      user_id: userId,
      settlement: settlementId,
      name: data.name,
      sex: data.gender
    }
  });
}
