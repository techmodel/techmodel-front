import { combineReducers } from 'redux';
import authReducer from './auth';
import filtersReducer from './filters';

const rootReducer = combineReducers({
  auth: authReducer,
  filters: filtersReducer,
});

export default rootReducer;
