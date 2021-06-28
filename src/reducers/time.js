import { PAUSE_TIME, SET_TIMER, REESTART_TIME } from '../actions/types';

const INITIAL_STATE = {
  isTimerPaused: false,
  currentTime: 30,
  reestart: false,
};

const time = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case PAUSE_TIME:
    return {
      ...state,
      isTimerPaused: true,
      reestart: false,
    };
  case SET_TIMER:
    return {
      ...state,
      currentTime: state.currentTime - 1,
      reestart: false,
    };
  case REESTART_TIME:
    return {
      ...state,
      reestart: !state.reestart,
      currentTime: 30,
      isTimerPaused: false,
    };
  default:
    return state;
  }
};

export default time;
