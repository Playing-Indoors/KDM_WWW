export default function(state=null, action) {
  switch (action.type) {
    case 'GET_SAMPLE':
      return action.payload;
    default:
      return state;
  };
}
