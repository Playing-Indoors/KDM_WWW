import axios from "axios";
import { GET_SURVIVOR } from "./types";

const KDM_API = require("KDM_API");

function getSurvivorAsync(data) {
  return {
    type: GET_SURVIVOR,
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
