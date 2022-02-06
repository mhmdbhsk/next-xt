import { ThemeAppEnum } from '@global/reducers/App';
import { AppActionType } from 'global/action-types';

interface HYDRATE {
  type: AppActionType.HYDRATE;
  payload: any;
}

interface UpdateLocalAction {
  type: AppActionType.UPDATE_LOCALE_APP;
  payload: string;
}

interface UpdateSidebarCollapsedAction {
  type: AppActionType.UPDATE_SIDEBAR_COLLAPSED_APP;
  payload: boolean;
}

interface UpdateThemeApp {
  type: AppActionType.UPDATE_THEME_APP;
  payload: ThemeAppEnum;
}

export type AppAction =
  | HYDRATE
  | UpdateLocalAction
  | UpdateSidebarCollapsedAction
  | UpdateThemeApp;
