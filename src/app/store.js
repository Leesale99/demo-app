import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

import rootReducer from './reducers/index';
import markers from './data/markers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const defaultStore = {
  markers
};


export default createStore (
  rootReducer,
  defaultStore,
  composeEnhancers(applyMiddleware(
    createLogger(),
    thunk,
    promise()
  ))
);
