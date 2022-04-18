import joi from 'joi';

export default joi.object({
  name: joi.string().min(3).required().messages({
    'string.base': '422|Name must be a string',
    'string.min': '422|Name must be at least 3 characters long',
    'any.required': '400|Name is required',
  }),
  age: joi.number().integer().positive().required()
    .messages({
      'number.base': '422|Age must be an integer',
      'number.integer': '422|Age must be an integer',
      'number.positive': '422|Age must be greater than 0',
      'any.required': '400|Age is required',
    }),
  email: joi.string().email().required().messages({
    'string.base': '422|Email must be a string',
    'string.email': '422|Email must be a valid email',
    'any.required': '400|Email is required',
  }),
});