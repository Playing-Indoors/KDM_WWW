import axios from "axios";
import { GET_WORLD } from "./types";

const KDM_API = require("KDM_API");

function getWorldAsync(data) {
  return {
    type: GET_WORLD,
    payload: data.data
  };
}

export function getWorld() {
  return dispatch => {
    axios.get(`${KDM_API}/world`).then(res => {
      console.log("WORLD", res);
      dispatch(getWorldAsync(res));
    });
  };
}
