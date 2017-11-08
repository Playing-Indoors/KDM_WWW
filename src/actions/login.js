import { browserHistory } from "react-router";
import axios from "axios";
import {
  AUTH_USER,
  AUTH_ERROR,
  UNAUTH_USER,
  GET_USER,
  GET_SETTLEMENT
} from "./types";
const KDM_API = require("KDM_API");

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  };
}
export function authenticate({ username, password }) {
  return function(dispatch) {
    axios
      .post(`${KDM_API}/login`, { username: username, password: password })
      .then(response => {
        localStorage.setItem("access_token", response.data.access_token);
        localStorage.setItem("userId", response.data._id);
        let auth = response.data.access_token;
        let userId = response.data._id;
        dispatch({ type: AUTH_USER });
        axios({
          headers: { Authorization: auth },
          method: "get",
          url: `${KDM_API}/user/dashboard/${userId}`
        }).then(res => {
          let settlementId = res.data.user.current_settlement.$oid;
          dispatch(getUserAsync(res.data));
          axios({
            headers: { Authorization: auth },
            method: "get",
            url: `${KDM_API}/settlement/get/${settlementId}`
          }).then(res => {
            dispatch(getSettlementAsync(res.data));
            browserHistory.push(`/settlements/${settlementId}`);
          });
        });
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

function getUserAsync(data) {
  return {
    type: GET_USER,
    payload: data
  };
}

function getSettlementAsync(data) {
  return {
    type: GET_SETTLEMENT,
    payload: data
  };
}
