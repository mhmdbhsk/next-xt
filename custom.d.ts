/// <reference types="react-scripts" />

import rootReducer from 'global/reducers';

declare global {
  interface AppState {
    theme: MenuTheme;
    locale: string;
    drawerNavbarCollapsed: boolean;
    modalAccountOpen: boolean;
    phoneInput: {
      country: Country;
      phone: string;
    };
  }

  interface AuthState {
    token: string;
    merchantId: string;
    user: UserDto;
  }

  type StateType = ReturnType<typeof rootReducer>;
}
