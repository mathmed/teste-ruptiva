import { ValidationError } from 'yup';

interface Errors {
  [key: string]: string;
}

const errorsValidator = (errors: ValidationError) => {
  const validationErrors: Errors = {};

  errors.inner.forEach((error) => {
    validationErrors[error.path] = error.message;
  });

  return validationErrors;
};

export default errorsValidator;
