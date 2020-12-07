import * as admin from 'firebase';

const firebase = admin.firestore();
let set = jest.fn();
let get = jest.fn(() => [
  {
    data: () => ({
      name: 'Mateus',
      document: '123',
      type: 'individual',
      id: 1,
    }),
  },
]);
let doc = jest.fn(() => ({ set, delete: jest.fn() }));
jest.spyOn(firebase, 'collection').mockReturnValue({ doc });
jest.spyOn(firebase, 'collection').mockReturnValue({ get });
jest.spyOn(console, 'warn').mockImplementation(() => {});
jest.spyOn(console, 'error').mockImplementation(() => {});
