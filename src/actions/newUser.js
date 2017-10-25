import axios from "axios";
import { browserHistory } from "react-router";

const KDM_API = require("KDM_API");

export function newUser(data) {
  return axios({
    method: "post",
    url: `${KDM_API}/new/user`,
    data: data
  });
}
