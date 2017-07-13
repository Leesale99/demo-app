import { combineReducers } from 'redux';

import properties from './propertyReducer';
import activeFilters from './filterReducer';

const rootReducer = combineReducers({
  properties,
  activeFilters
});

export default rootReducer;
