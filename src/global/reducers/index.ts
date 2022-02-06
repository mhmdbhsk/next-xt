import { combineReducers } from 'redux';
import app, { AppStateType } from './App';
import home, { HomeStateType } from '@constructors/app/home/store';
import profile, { ProfileStateType } from '@constructors/app/profile/store';

export interface RootState {
  readonly app: AppStateType;
  readonly home: HomeStateType;
  readonly profile: ProfileStateType;
}

const combinedReducer = combineReducers<RootState>({
  app,
  home,
  profile,
});

export default combinedReducer;
