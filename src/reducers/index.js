import { combineReducers } from 'redux';
import ExampleReducer from './reducer_example';

const rootReducer = combineReducers({
  dataFromRedux: ExampleReducer
});

export default rootReducer;
