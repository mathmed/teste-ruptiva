import React from 'react';
import configureStore from 'redux-mock-store';
import ReduxThunk from 'redux-thunk';
import UsersInfo from '../../app/screens/UsersInfo';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import '../../../__mocks__/mockFirebase';
import getUsers from '../../app/core/redux/actions/getUsers';
import deleteUser from '../../app/core/redux/actions/deleteUser';

let screen = null;
jest.useFakeTimers();
jest.setTimeout(30000);

describe('[SCREENS] UsersInfo', () => {
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
        <UsersInfo />
      </Provider>,
    );
  });

  it('Should render corretly', () => {
    expect(screen.toJSON()).toMatchSnapshot();
  });

  it('Should calls getUsers action and returns data success', async () => {
    await store.dispatch(getUsers());
    const actions = store.getActions();
    expect.assertions(3);
    expect(actions[0].type).toEqual('START_GET_USERS');
    expect(actions[1].type).toEqual('FINISH_GET_USERS');
    expect(actions[1].payload).toEqual([
      {
        name: 'Mateus',
        document: '123',
        type: 'individual',
        id: 1,
      },
    ]);
  });

  it('Should calls deleteUser action and returns data success', async () => {
    await store.dispatch(deleteUser(10));
    const actions = store.getActions();
    expect.assertions(3);
    expect(actions[0].type).toEqual('START_GET_USERS');
    expect(actions[1].type).toEqual('FINISH_GET_USERS');
    expect(actions[1].payload).toEqual([
      {
        name: 'Mateus',
        document: '123',
        type: 'individual',
        id: 1,
      },
    ]);
  });
});
