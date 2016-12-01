import axios from 'axios';
import {GET_SURVIVOR} from './types';
const KDM_API = require('KDM_API');

export function getSurvivor(){
    return dispatch => {
      axios({
        method: 'post',
        url: `${KDM_API}/survivor/get/56de585d421aa91a9e10e91e`
      }).then((res)=>{
              console.log("SURVIVOR", res);
          dispatch(getSurvivorAsync(res.data));
        });
    }
}

function getSurvivorAsync(data){
  return {
    type: GET_SURVIVOR,
    payload: data.sheet
  };
}
