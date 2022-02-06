import { Dispatch } from 'redux';
import { ActionType } from './action-types';
import { Action } from './actions';
import { HomeDataState } from './reducers';

export const increaseCountHome = () => {
  return {
    type: ActionType.INCREASE_COUNT_HOME,
  };
};

export const decreaseCountHome = () => {
  return {
    type: ActionType.DECREASE_COUNT_HOME,
  };
};

export const updateDataHome = (value: HomeDataState) => {
  return {
    type: ActionType.UPDATE_DATA_HOME,
    payload: value,
  };
};
