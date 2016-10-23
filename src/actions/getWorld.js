import axios from 'axios';
import {GET_WORLD} from './types';
const ROOT_URL = 'http://api.thewatcher.io';

export function getWorld(){
    return dispatch => {
      axios.get(`${ROOT_URL}/world`)
				.then((res)=>{
					dispatch(getWorldAsync(res));
				})
    }
}

function getWorldAsync(data){
  return {
    type: GET_WORLD,
    payload: data.data
  };
}
