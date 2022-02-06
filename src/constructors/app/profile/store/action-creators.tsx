import { ActionType } from './action-types';

export const updateNameProfile = (value: string) => {
  return {
    type: ActionType.UPDATE_NAME_PROFILE,
    payload: value,
  };
};

export const updateJobProfile = (value: string) => {
  return {
    type: ActionType.UPDATE_JOB_PROFILE,
    payload: value,
  };
};
