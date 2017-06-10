import { combineReducers } from 'redux';
import resultsReducer from './results';

const rootReducer = combineReducers({
  results: resultsReducer
});

export default rootReducer;