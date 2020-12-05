import {
  UsersState,
  DispatchParams,
  START_GET_USERS,
  FINISH_GET_USERS,
} from '../store/types';

const STATE: UsersState = {
  loadingGetUsersRequest: false,
  users: [],
};

export default (state = STATE, action: DispatchParams) => {
  switch (action.type) {
    case START_GET_USERS:
      return { ...state, loadingGetUsersRequest: true };
    case FINISH_GET_USERS:
      return {
        ...state,
        loadingGetUsersRequest: false,
        users: action.payload ? action.payload : null,
      };
    default:
      return state;
  }
};