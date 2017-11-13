import axios from "axios";
import { browserHistory } from "react-router";
import { SET_SETTLEMENT_ATTRIBUTES } from "./types.js";

const KDM_API = require("KDM_API");

export function setSettlementAttributes(settlement_id, data) {
  return async dispatch => {
    await axios({
      method: "post",
      url: `${KDM_API}/settlement/set_attribute/${settlement_id}`,
      data: data
    })
      .then(res => {
        dispatch(setSettlementAttributesAsync(data, settlement_id));
        return true;
      })
      .catch(error => {
        console.warn("actions error", error);
        return false;
      });
  };
}

function setSettlementAttributesAsync(data, settlement_id) {
  return {
    settlement_id,
    type: SET_SETTLEMENT_ATTRIBUTES,
    payload: data
  };
}
