import { combineReducers } from 'redux';
import user from './user';
import game from './game';
import time from './time';

const rootReducer = combineReducers({
  user,
  game,
  time,
});

export default rootReducer;
