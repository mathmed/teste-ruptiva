import { combineReducers } from 'redux';

import register from './register';
import users from './users';

export default combineReducers({
  register,
  users,
});
