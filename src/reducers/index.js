import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import AuthenticationReducer from './reducer_authentication';
import HomeReducer from './reducer_home';
import WorldReducer from './reducer_world';
import SettlementReducer from './reducer_settlement';
import SurvivorReducer from './reducer_survivor';

const rootReducer = combineReducers({
  authenticated: AuthenticationReducer,
  homeData: HomeReducer,
  worldData: WorldReducer,
  settlementData: SettlementReducer,
  survivorData: SurvivorReducer,
  form,
});

export default rootReducer;
