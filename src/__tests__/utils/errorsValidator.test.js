import errorsValidator from '../../app/utils/errorsValidator';
import { ValidationError } from 'yup';

describe('[UTILS] errorsValidator', () => {
  it('Should return error corretly', async () => {
    const errors = {
      inner: [
        {
          name: 'ValidationError',
          path: 'document',
          message: 'Invalid document',
        },
        {
          name: 'ValidationError',
          path: 'name',
          message: 'Invalid name',
        },
      ],
    };
    expect(errorsValidator(errors)).toEqual({
      document: 'Invalid document',
      name: 'Invalid name',
    });
  });
});
