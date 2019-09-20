import {combineReducers} from 'redux';

import auth from './auth';
import regions from './regions';
import user from './user';
import partner from './partner';
import rooms from './room';

const appReducer = combineReducers({
  auth,
  regions,
  user,
  partner,
  rooms,
});

const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT') {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
