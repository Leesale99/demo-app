import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';

import rootReducer from './reducers/index';
import properties from './data/properties';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const defaultStore = {
  properties,
  activeFilters: []
};


export default createStore (
  rootReducer,
  defaultStore,
  composeEnhancers(applyMiddleware(
    createLogger()
  ))
);
