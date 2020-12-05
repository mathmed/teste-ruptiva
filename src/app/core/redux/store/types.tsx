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
  id: string;
  name: string;
  document: string;
  type: string;
}

export interface UsersState {
  loadingGetUsersRequest: boolean;
  loadingRegisterRequest: boolean;
  users: UserData[];
}

export interface RegisterAction {
  register: (data: UserData) => Promise<void>;
}

export interface GetUsersAction {
  getUsers: () => Promise<void>;
}
export interface DeleteUsersAction {
  deleteUser: (uuid: string) => Promise<void>;
}
