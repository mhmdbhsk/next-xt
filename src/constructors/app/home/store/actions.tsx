import { ActionType } from './action-types';
import { HomeDataState } from './reducers';

interface HYDRATE {
  type: ActionType.HYDRATE;
  payload: any;
}

interface IncreaseCountHome {
  type: ActionType.INCREASE_COUNT_HOME;
}

interface DecreaseCountHome {
  type: ActionType.DECREASE_COUNT_HOME;
}

interface UpdateDataHome {
  type: ActionType.UPDATE_DATA_HOME;
  payload: HomeDataState;
}

export type Action =
  | HYDRATE
  | IncreaseCountHome
  | DecreaseCountHome
  | UpdateDataHome;
