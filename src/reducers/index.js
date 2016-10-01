import { combineReducers } from 'redux';
import AuthenticationReducer from './reducer_authentication';
import HomeReducer from './reducer_home';
import { reducer as form } from 'redux-form';

const rootReducer = combineReducers({
  authenticated: AuthenticationReducer,
  homeData: HomeReducer,
  form
});

export default rootReducer;
