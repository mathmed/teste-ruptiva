export const START_REGISTER = 'START_REGISTER';
export const FINISH_REGISTER = 'FINISH_REGISTER';

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
