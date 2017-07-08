import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

import rootReducer from './reducers/index';
import markers from './data/markers';
import properties from './data/properties';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const defaultStore = {
  markers,
  properties
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
