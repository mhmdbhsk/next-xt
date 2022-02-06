import { ActionType } from './action-types';
import { Action } from './actions';

export type HomeDataState = {
  body: string;
  id: number;
  title: string;
  userId: number;
};

export interface HomeStateType {
  count: any;
  data: HomeDataState[] | null;
}

const initialState: HomeStateType = {
  count: 0,
  data: null,
};

const reducer = (state: HomeStateType = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.HYDRATE:
      return {
        ...state,
        ...action.payload.home,
      };
    case ActionType.INCREASE_COUNT_HOME:
      return {
        ...state,
        count: state.count + 1,
      };
    case ActionType.DECREASE_COUNT_HOME:
      return {
        ...state,
        count: state.count - 1,
      };
    case ActionType.UPDATE_DATA_HOME:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
