import { browserHistory } from "react-router";
import axios from "axios";
import { AUTH_USER, AUTH_ERROR, UNAUTH_USER } from "./types";
const KDM_API = require("KDM_API");

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  };
}
export function authenticate({ username, password }) {
  return function(dispatch) {
    axios.defaults.headers.common["Content-Type"] = "application/json";
    axios
      .post(`${KDM_API}/login`, { username: username, password: password })
      .then(response => {
        dispatch({ type: AUTH_USER });
        localStorage.setItem("access_token", response.data.access_token);
        localStorage.setItem("userId", response.data._id);
        browserHistory.push(`/settlement/${response.data._id}`);
      })
      .catch(err => {
        console.log("Error:", err);
        dispatch(authError(true));
      });
  };
}

export function signoutUser() {
  localStorage.removeItem("access_token");
  return { type: UNAUTH_USER };
}
