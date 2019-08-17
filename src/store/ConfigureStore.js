import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import rootReducer from '../reducers';

const isClient = typeof window !== 'undefined';


export function getComposeEnhancers() {
  if (
    (['client', 'both'].includes(process.env.REACT_APP_DEBUG) ||
      process.env.NODE_ENV !== 'production') &&
    isClient &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ // eslint-disable-line
  ) {
    return window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: false }); // eslint-disable-line
  }
  return compose;
}

export default function configureStore(initialState, history) {
  const middlewares = [thunk, logger, routerMiddleware(history)];
  const composeEnhancers = getComposeEnhancers();
  const store = createStore(
    rootReducer(history),
    initialState,
    composeEnhancers(applyMiddleware(...middlewares))
  );
  return { store };
}
