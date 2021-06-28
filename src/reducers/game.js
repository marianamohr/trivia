import { FETCH_GAME_DATA, RESET_GAME_DATA, SET_CONFIGURATION } from '../actions/types';

const INITIAL_STATE = {
  gameData: [],
  settings: {
    category: 20,
    difficult: '',
    type: '',
  },
};

const game = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case FETCH_GAME_DATA:
    return {
      ...state,
      gameData: [...action.payload.data],
    };

  case RESET_GAME_DATA:
    return {
      ...state,
      gameData: [],
    };
  case SET_CONFIGURATION:
    return {
      ...state,
      settings: action.payload.settings,
    };
  default:
    return state;
  }
};

export default game;
