import {
  FETCH_TOKEN,
  SAVE_USER,
  FETCH_GAME_DATA,
  PAUSE_TIME,
  SET_TIMER,
  SAVE_SCORE,
  REESTART_TIME,
  RESET_GAME_DATA,
  SET_CONFIGURATION,
} from './types';
import { apiTokenRequest, apiQuestionsRequest } from '../services/api';

export const actionFetchToken = () => (dispatch) => apiTokenRequest().then((token) => {
  localStorage.setItem('token', token);
  dispatch({
    type: FETCH_TOKEN,
    payload: {
      token,
    },
  });
});

export const actionFetchGameData = (token, settings) => (dispatch) => (
  apiQuestionsRequest(token, settings)
    .then((data) => dispatch({
      type: FETCH_GAME_DATA,
      payload: {
        data,
      },
    })));

export const actionSaveUser = (user, gravatar) => ({
  type: SAVE_USER,
  payload: {
    user,
    gravatar,
  },
});

export const pauseTime = () => ({
  type: PAUSE_TIME,
});

export const setTimer = () => ({
  type: SET_TIMER,
});

export const actionSaveScore = (questionScore) => ({
  type: SAVE_SCORE,
  payload: {
    questionScore,
  },
});

export const actionStart = () => ({
  type: REESTART_TIME,
});

export const actionResetGameData = () => ({
  type: RESET_GAME_DATA,
});

export const actionSetConfiguration = (settings) => ({
  type: SET_CONFIGURATION,
  payload: {
    settings,
  },
});
