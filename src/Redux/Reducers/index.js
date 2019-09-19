import {combineReducers} from 'redux';

import auth from './auth';
import regions from './regions';

const appReducer = combineReducers({
  auth,
  regions,
});

const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT') {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
