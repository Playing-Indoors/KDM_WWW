import { combineReducers } from 'redux';
import AuthenticationReducer from './reducer_authentication';
import HomeReducer from './reducer_home';
import WorldReducer from './reducer_world';
import SettlementReducer from './reducer_settlement';
import SurvivorReducer from './reducer_survivor';
import AyaReducer from './reducer_aya';
import { reducer as form } from 'redux-form';

const rootReducer = combineReducers({
  authenticated: AuthenticationReducer,
  homeData: HomeReducer,
  worldData: WorldReducer,
  settlementData: SettlementReducer,
  survivorData: SurvivorReducer,
  ayaData: AyaReducer,
  form
});

export default rootReducer;
