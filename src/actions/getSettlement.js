import axios from 'axios';
import {GET_SETTLEMENT} from './types';
const KDM_API = require('KDM_API');

export function getSettlement(){
    const config = {
      "meta": {
        "api_key": "Yitk8ZRWl9Z3M6Zx.N29mnvCMs"
      }
    };
    return dispatch => {
      axios.post(`${KDM_API}/settlement/get/5681f9e7421aa93924b6d013`, config)
        .then((res)=>{
          console.log("SETTLEMENT", res);
          dispatch(getSettlementAsync(res.data));
        });
    }
}

function getSettlementAsync(data){
  return {
    type: GET_SETTLEMENT,
    payload: data.data
  };
}
