import { createStore, applyMiddleware } from 'redux';
import { createWrapper } from 'next-redux-wrapper';
import {
  nextReduxCookieMiddleware,
  wrapMakeStore,
} from 'next-redux-cookie-wrapper';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducers';
import thunkMiddleware from 'redux-thunk';

const bindMiddleware = (middleware: any) => {
  if (process.env.NODE_ENV !== 'production') {
    return composeWithDevTools(applyMiddleware(...middleware));
  }

  return applyMiddleware(...middleware);
};

const logger = createLogger({ diff: true });

const makeStore = wrapMakeStore(() =>
  createStore(
    reducer,
    bindMiddleware([
      nextReduxCookieMiddleware({
        subtrees: ['app'],
      }),
      logger,
      thunkMiddleware,
    ])
  )
);

export const wrapper = createWrapper(makeStore, {
  debug: process.env.NODE_ENV !== 'production' ?? true,
});
