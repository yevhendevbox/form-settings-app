import { helpers, required, minLength, maxLength } from '@vuelidate/validators';

const lengthMessage = (number, description) => {
  const max = `Maximum amount of simbols - ${number}`;
  const min = `Minimum amount of simbols - ${number}`;
  return description === 'max' ? max : min;
};
const validEmail = helpers.regex(/^[a-z\d][a-z\d!#$%&'*+\-\/=?^_`{|().,:;<>@[\]\\]+@[a-z\d.-]+\.[\w-]{2,4}$/i);
const validUserName = helpers.regex(/^[a-zA-Z0-9!#$%&'*+\-/=?^_`{|(),:;<>@[\]]*$/);
const validPhoneNumber = helpers.regex(/^\+380\d{3}\d{2}\d{2}\d{2}$/);

export const userNameValidator = helpers.withMessage('Latin letters, digits and special symbols', validUserName);
export const userPhoneValidator = helpers.withMessage(
  'Phone number should start with + 38, and then digits from 0 to 9',
  validPhoneNumber
);
export const requiredValidator = helpers.withMessage("It's a reqiured field", required);
export const emailMinLength = helpers.withMessage(lengthMessage(7, 'min'), minLength(5));
export const emailMaxLength = helpers.withMessage(lengthMessage(320, 'max'), maxLength(320));
export const emailValidator = helpers.withMessage(
  'Enter email in format: john.doe@gmail.com',
  validEmail
);