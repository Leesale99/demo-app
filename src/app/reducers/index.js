import { combineReducers } from 'redux';

import markers from './markerReducer';
import properties from './propertyReducer';

const rootReducer = combineReducers({
    markers,
    properties
  });

export default rootReducer;
