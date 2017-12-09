import axios from "axios";
import { SET_PREFERENCE } from "./types";

const KDM_API = require("KDM_API");

/* ******************************************
************** SET PREFERENCE ***************
******************************************* */

function setPreferenceAsync(data, userId) {
  return {
    userId,
    type: SET_PREFERENCE,
    payload: data
  };
}

export function setPreference(userId, data) {
  return async dispatch => {
    await axios({
      method: "post",
      url: `${KDM_API}/user/set_preferences/${userId}`,
      data: {
        user_id: userId,
        preferences: [
          {
            handle: data.handle,
            value: data.value
          }
        ]
      }
    }).then(() => {
      dispatch(setPreferenceAsync(data, userId));
      return true;
    });
  };
}
