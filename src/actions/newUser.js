import axios from "axios";
import { browserHistory } from "react-router";
import { AUTH_USER, AUTH_ERROR, UNAUTH_USER, GET_USER } from "./types";

const KDM_API = require("KDM_API");

export function newUser(data) {
  return function(dispatch) {
    axios({
      method: "post",
      url: `${KDM_API}/new/user`,
      data: data
    })
    .then((res)=>{
      console.log('created new user', res);
      //localStorage.setItem("access_token", response.data.access_token);
      //localStorage.setItem("userId", response.data._id);
      dispatch({ type: AUTH_USER });
      browserHistory.push(
        `/settlements/`
      );
    })
    .catch(err => {
      alert('Unable to create account');
      console.log('err', err);
    });
  };
}
