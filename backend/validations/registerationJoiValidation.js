import joi from 'joi';

export const registerationSchemaValidation = joi.object({
    name: joi.string().min(2).max(60).required().messages({
        'string.min': 'Name should have a minimum length of 2',
        'string.max': 'Name should have a maximum length of 60',
        'any.required': 'Name is required'
    }),
    lastName: joi.string().min(2).max(60).messages({
        'string.min': 'Last Name should have a minimum length of 2',
        'string.max': 'Last Name should have a maximum length of 60',
    }),
    phoneNumber1: joi.string().required().messages({
        'any.required': 'Phone Number 1 is required'
    }),
    email: joi.string().email().messages({
        'string.email': 'Email must be a valid email address',
    }),
    password: joi.string().min(2).required().messages({
        'string.min': 'Password should have a minimum length of 6',
        'any.required': 'Password is required'
    }),
});

