import React from 'react';
import configureStore from 'redux-mock-store';
import ReduxThunk from 'redux-thunk';
import Register from '../../app/screens/Register';
import { Provider } from 'react-redux';
import register from '../../app/core/redux/actions/register';
import usersReducer from '../../app/core/redux/reducers/users';
import renderer from 'react-test-renderer';
import '../../../__mocks__/mockFirebase';

let screen = null;
jest.useFakeTimers();
jest.setTimeout(30000);
describe('[SCREENS] Register', () => {
  const mockStore = configureStore([ReduxThunk]);
  const reducerInitialState = {
    loadingGetUsersRequest: false,
    loadingRegisterRequest: false,
    users: [],
  };
  const store = mockStore(reducerInitialState);

  beforeEach(() => {
    screen = renderer.create(
      <Provider store={store}>
        <Register />
      </Provider>,
    );
  });

  it('Should render corretly', () => {
    expect(screen.toJSON()).toMatchSnapshot();
  });

  it('Should return the reducer initialState', () => {
    const reducer = usersReducer(undefined, {});
    expect(reducer).toEqual(reducerInitialState);
  });

  it('Should return the reducer state after dispatchs', () => {
    let reducer = usersReducer(undefined, { type: 'START_REGISTER' });
    expect(reducer).toEqual({
      ...reducerInitialState,
      loadingRegisterRequest: true,
    });

    reducer = usersReducer(undefined, { type: 'FINISH_REGISTER' });
    expect(reducer).toEqual(reducerInitialState);

    reducer = usersReducer(undefined, { type: 'START_GET_USERS' });
    expect(reducer).toEqual({
      ...reducerInitialState,
      loadingGetUsersRequest: true,
    });

    reducer = usersReducer(undefined, {
      type: 'FINISH_GET_USERS',
      payload: [{ name: 'Mateus', document: '123', type: 'individual', id: 1 }],
    });

    expect(reducer).toEqual({
      ...reducerInitialState,
      users: [{ name: 'Mateus', document: '123', type: 'individual', id: 1 }],
    });
  });

  it('Should calls register action and returns success', async () => {
    await store.dispatch(
      register({
        name: 'Mateus',
        document: '123',
        type: 'foo',
        id: 1,
      }),
    );

    const actions = store.getActions();
    expect.assertions(2);
    expect(actions[0].type).toEqual('START_REGISTER');
    expect(actions[1].type).toEqual('FINISH_REGISTER');
  });
});
