import { ActionType } from './action-types';

interface HYDRATE {
  type: ActionType.HYDRATE;
  payload: any;
}

interface UpdateNameProfile {
  type: ActionType.UPDATE_NAME_PROFILE;
  payload: string;
}

interface UpdateJobProfile {
  type: ActionType.UPDATE_JOB_PROFILE;
  payload: string;
}

export type Action = HYDRATE | UpdateNameProfile | UpdateJobProfile;
