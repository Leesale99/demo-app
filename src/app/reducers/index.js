import { combineReducers } from 'redux';

import math from './mathReducer';
import user from './userReducer';

const rootReducer = combineReducers({
    math,
    user
  });

export default rootReducer;
