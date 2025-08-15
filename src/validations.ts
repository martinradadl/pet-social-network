import {emailRegex, usernameRegex} from './helpers/utils';

export const VALIDATIONS = {
  REQUIRED: {message: 'This field is required', value: true},
  MIN: (value: number) => ({
    message: `At least ${value} characters are required`,
    value,
  }),
  MAX: (value: number) => ({
    message: `No more than ${value} characters are allowed`,
    value,
  }),
  EMAIL_PATTERN: {message: 'Invalid email format', value: emailRegex},
  USERNAME_PATTERN: {message: 'Invalid username format', value: usernameRegex},
};
