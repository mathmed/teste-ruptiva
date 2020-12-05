export const START_REGISTER = 'START_REGISTER';
export const FINISH_REGISTER = 'FINISH_REGISTER';
export const START_GET_USERS = 'START_GET_USERS';
export const FINISH_GET_USERS = 'FINISH_GET_USERS';

export interface DispatchParams {
  type: string;
  payload?: any;
}
export interface Dispatch {
  ({ type, payload }: DispatchParams): any;
}

export interface UserData {
  name: string;
  document: string;
  type: string;
}

export interface RegisterState {
  loadingRegisterRequest: boolean;
  register: (data: UserData) => Promise<void>;
}
export interface UsersState {
  loadingGetUsersRequest: boolean;
  users: UserData[];
  getUsers: () => Promise<void>;
}
