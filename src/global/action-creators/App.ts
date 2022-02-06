import { AppAction } from 'global/action';
import { AppActionType } from 'global/action-types';
import { ThemeAppEnum } from 'global/reducers/App';
import { Dispatch } from 'redux';

export const updateLocaleApp = (locale: string) => {
  return {
    type: AppActionType.UPDATE_LOCALE_APP,
    payload: locale,
  };
};

export const updateSidebarCollapsedApp = (value: boolean) => {
  return {
    type: AppActionType.UPDATE_SIDEBAR_COLLAPSED_APP,
    payload: value,
  };
};

export const updateThemeApp = (value: ThemeAppEnum) => {
  return {
    type: AppActionType.UPDATE_THEME_APP,
    payload: value,
  };
};
