import { combineReducers } from 'redux';
import AuthenticationReducer from './reducer_authentication';
import HomeReducer from './reducer_home';
import WorldReducer from './reducer_world';
import { reducer as form } from 'redux-form';

const rootReducer = combineReducers({
  authenticated: AuthenticationReducer,
  homeData: HomeReducer,
  worldData: WorldReducer,
  form
});

export default rootReducer;
