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

export interface RegisterActionData {
  name: string;
  document: string;
  type: string;
}
export interface RegisterState {
  loadingRegisterRequest: boolean;
}

export interface RegisterAction {
  register: (data: RegisterActionData) => Promise<void>;
}

export interface UserData {
  name: string;
  document: string;
  type: string;
}

export interface UsersState {
  loadingGetUsersRequest: boolean;
  users: UserData[];
}

export interface GetUsersAction {
  getUsers: () => Promise<void>;
}
