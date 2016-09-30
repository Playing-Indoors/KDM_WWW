import axios from 'axios';

export function getExample(){
  return dispatch => {
    axios.get(`http://your-api.com`)
      .then((res) => {
        dispatch(reduceGetExample(res));
      })
      .catch((res) => {
        console.log("The following error occured: " + res);
      });
  }
}

function reduceGetExample(data){
  return {
    type: 'GET_Example', payload: data
  };
}
