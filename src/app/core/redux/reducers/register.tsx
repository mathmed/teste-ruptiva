import {
  START_REGISTER,
  FINISH_REGISTER,
  RegisterState,
  DispatchParams,
} from '../store/types';

const STATE: RegisterState = {
  loadingRegisterRequest: false,
};

export default (state = STATE, action: DispatchParams) => {
  switch (action.type) {
    case START_REGISTER:
      return { ...state, loadingRegisterRequest: true };
    case FINISH_REGISTER:
      return { ...state, loadingRegisterRequest: false };
    default:
      return state;
  }
};
