import axios from 'axios';
import {GET_SURVIVOR} from './types';
const KDM_API = require('KDM_API');

export function getSurvivor(){
    const config = {
      "meta": {
        "api_key": "Yitk8ZRWl9Z3M6Zx.N29mnvCMs"
      }
    };
    return dispatch => {
      axios.post(`${KDM_API}/survivor/get/56de585d421aa91a9e10e91e`, config)
        .then((res)=>{
              console.log("SURVIVOR", res);
          dispatch(getSurvivorAsync(res.data));
        });
    }
}

function getSurvivorAsync(data){
  return {
    type: GET_SURVIVOR,
    payload: data.data
  };
}
