import Joi from 'joi';

export const createContactSchema = Joi.object({
  name: Joi.string().min(3).max(20).required().messages({
    'string.base': 'Username should be a string',
    'string.min': 'Username should have at least {#limit} characters',
    'string.max': 'Username should have at most {#limit} characters',
    'any.required': 'Username is required',
  }),

  // phoneNumber: Joi.string()
  //   .pattern(/^\+380\d{9}$/)
  //   .required()
  //   .messages({
  //     'string.pattern.base':
  //       'Phone number must be in the format +380XXXXXXXXX (9 digits after the country code)',
  //     'string.base': 'Phone number must be a string',
  //     'any.required': 'Phone number is required',
  //   }),

  phoneNumber: Joi.string().min(3).max(20).required().messages({
    'string.base': 'Phone Number should be a string',
    'string.min': 'Phone Number should have at least {#limit} characters',
    'string.max': 'Phone Number should have at most {#limit} characters',
    'any.required': 'Phone Number is required',
  }),

  email: Joi.string().email().required().messages({
    'string.email':
      'Email must be a valid email address, e.g., example@example.com',
    'any.required': 'Email is required',
  }),
  isFavourite: Joi.boolean().default(false).messages({
    'boolean.base': 'isFavourite must be true or false',
  }),
  contactType: Joi.string()
    .valid('work', 'home', 'personal')
    .required()
    .default('personal')
    .messages({
      'any.only':
        'Contact type must be one of the following: work, home, personal',
      'any.required': 'Contact type is required',
    }),
});

export const updateContactSchema = Joi.object({
  name: Joi.string().min(3).max(20).messages({
    'string.base': 'Name should be a string',
    'string.min': 'Name should have at least {#limit} characters',
    'string.max': 'Name should have at most {#limit} characters',
  }),

  phoneNumber: Joi.string().min(3).max(20).messages({
    'string.base': 'Phone Number should be a string',
    'string.min': 'Phone Number should have at least {#limit} characters',
    'string.max': 'Phone Number should have at most {#limit} characters',
  }),

  // phoneNumber: Joi.string()
  //   .pattern(/^\+380\d{9}$/)
  //   .messages({
  //     'string.pattern.base':
  //       'Phone number must be in the format +380XXXXXXXXX (9 digits after the country code)',
  //     'string.base': 'Phone number must be a string',
  //   }),

  email: Joi.string().email().messages({
    'string.email':
      'Email must be a valid email address, e.g., example@example.com',
  }),

  isFavourite: Joi.boolean().messages({
    'boolean.base': 'isFavourite must be true or false',
  }),

  contactType: Joi.string().valid('work', 'home', 'personal').messages({
    'any.only':
      'Contact type must be one of the following: work, home, personal',
  }),
})
  .or('name', 'phoneNumber', 'email', 'isFavourite', 'contactType')
  .messages({
    'object.missing':
      'At least one field (name, phoneNumber, email, isFavourite, or contactType) must be provided',
  });
