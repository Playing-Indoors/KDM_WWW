import axios from 'axios';
import {GET_SETTLEMENT} from './types';
const KDM_API = require('KDM_API');

export function getSettlement(){
    return dispatch => {
      axios({
        method: 'post',
        url: `${KDM_API}/settlement/get/5681f9e7421aa93924b6d013`
      }).then((res)=>{
        console.log("SETTLEMENT", res);
        dispatch(getSettlementAsync(res.data));
        });
    }
}

function getSettlementAsync(data){
  return {
    type: GET_SETTLEMENT,
    payload: data
  };
}
