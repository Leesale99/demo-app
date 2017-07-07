import { combineReducers } from 'redux';

import markers from './markerReducer';
// import user from './userReducer';

const rootReducer = combineReducers({
    markers,
    // user
  });

export default rootReducer;
