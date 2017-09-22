import axios from "axios";
import { GET_SETTLEMENT } from "./types";

const KDM_API = require("KDM_API");

axios.defaults.headers.common["Content-Type"] = "application/json";

function getSettlementAsync(data) {
  return {
    type: GET_SETTLEMENT,
    payload: data
  };
}

export function getSettlement() {
  return dispatch => {
    let auth = localStorage.getItem(
      "access_token"
    );
    axios({
      headers: {"Authorization": auth},
      method: "get",
      url: `${KDM_API}/settlement/get/5681f9e7421aa93924b6d013`
    }).then(res => {
      console.log("SETTLEMENT", res);
      dispatch(getSettlementAsync(res.data));
    });
  };
}


// create call
export function createSettlement() {
  return dispatch => {
    let userId = localStorage.getItem(
      "userId"
    );
    axios({
      method: "post",
      url: `${KDM_API}/new/settlement`,
      data: {"user_id": userId, "campaign": "people_of_the_lantern"}
    }).then(res => {
      console.log("CREATE", res);
    });
    // axios({
    // 	method: 'get',
    // 	url: `${KDM_API}/authorization/check`,
    // }).then((res) => {
    // 	console.log('AUTH CHECK', res);
    //
    // });
  };
}

//update call
export function createSettlement() {
  return dispatch => {
    let userId = localStorage.getItem(
      "userId"
    );
    axios({
      method: "post",
      url: `${KDM_API}/settlement/set_attribute/59c511da8740d90655610336`,
      data: {"user_id": userId, 'attribute': 'survival_limit', 'value': 3}
    }).then(res => {
      console.log("CREATE", res);
    });
    // axios({
    // 	method: 'get',
    // 	url: `${KDM_API}/authorization/check`,
    // }).then((res) => {
    // 	console.log('AUTH CHECK', res);
    //
    // });
  };
}
