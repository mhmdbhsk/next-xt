import { AppActionType } from 'global/action-types';
import { AppAction } from '../action/App';

export enum ThemeAppEnum {
  LIGHT = 'LIGHT',
  DARK = 'DARK',
}

export interface AppStateType {
  theme: ThemeAppEnum;
  locale: string | null;
  sidebar: boolean;
}

const initialState: AppStateType = {
  theme: ThemeAppEnum.LIGHT,
  locale: null,
  sidebar: true,
};

const reducer = (state: AppStateType = initialState, action: AppAction) => {
  switch (action.type) {
    case AppActionType.HYDRATE:
      return {
        ...state,
        ...action.payload.app,
      };
    case AppActionType.UPDATE_LOCALE_APP:
      return {
        ...state,
        theme: action.payload,
      };
    case AppActionType.UPDATE_SIDEBAR_COLLAPSED_APP:
      return {
        ...state,
        sidebar: action.payload,
      };
    case AppActionType.UPDATE_THEME_APP:
      return {
        ...state,
        theme: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
