import axios from 'axios';
import {GET_AYA} from './types';
//TODO fakeson delete
import fakeson from '../../fakeson';

//TODO add api enpoint here
//const ROOT_URL = 'http://kdm-api-endpint.io';

export function getAya(){
    // Pass token to endpoint here
    return dispatch => {
      // AJAX CALL HAPPENS HERE
      dispatch(getAyaAsync(fakeson));
    }
}

function getAyaAsync(data){
  return {
    type: GET_AYA,
    payload: data
  };
}
