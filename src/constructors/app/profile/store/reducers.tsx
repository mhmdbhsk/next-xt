import { ActionType } from './action-types';
import { Action } from './actions';

export interface ProfileStateType {
  name: string | null;
  job: string | null;
}

const initialState: ProfileStateType = {
  name: null,
  job: null,
};

const reducer = (state: ProfileStateType = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.HYDRATE:
      return {
        ...state,
        ...action.payload.profile,
      };
    case ActionType.UPDATE_NAME_PROFILE:
      return {
        ...state,
        name: action.payload,
      };
    case ActionType.UPDATE_NAME_PROFILE:
      return {
        ...state,
        job: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
