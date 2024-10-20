import Joi from 'joi';

const authErrorMessages = {
  'string.base': 'Field {#label} must be a string.',
  'string.empty': 'Field {#label} cannot be empty.',
  'string.min': 'Name should have at least {#limit} characters',
  'string.max': 'Name should have at most {#limit} characters',
  'string.email': 'Field {#label} must be a valid email address.',
  'object.min': 'missing fields',
  'any.required': 'missing required {#label} field.',
};
export const registerUserSchema = Joi.object({
  name: Joi.string().min(3).max(20).required(),
  email: Joi.string().email(),
  password: Joi.string().required(),
}).messages(authErrorMessages);

export const loginUserSchema = Joi.object({
  email: Joi.string().email(),
  password: Joi.string().required(),
}).messages(authErrorMessages);
