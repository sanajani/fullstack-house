import AppError from '../errors/AppError.js';
import { loginUserService, registerUserService } from '../services/userServices.js';
import { asyncErrorHandler } from '../utils/asyncErrorHandler.js';
import { registerationSchemaValidation, loginSchemaValidation } from '../validations/registerationJoiValidation.js';

// Controller to handle user registration
export const registerUser = asyncErrorHandler(async (req,res, next) => {
    if(!req.body || Object.keys(req.body).length === 0) {
        return next(new AppError('Request body is missing', 400));
    }
    const userData = req.body;

    // Logic to handle user registration using userData
    const { error } = registerationSchemaValidation.validate(userData);
    if( error ) {
        return next(new AppError(error.details[0].message, 400));
    }

    const user = await registerUserService(userData);
    if(!user) {
        return next(new AppError('User registration failed', 500));
    }

    res.status(201).json({ message: 'User registered successfully', data: user });
});

// controller to handle user login
export const loginUser = asyncErrorHandler(async (req,res,next) => {
    if(!req.body || Object.keys(req.body).length === 0) {
        return next(new AppError('Request body is missing', 400));
    }
    const loginData = req.body;

    const { error } = loginSchemaValidation.validate(loginData);
    
    if( error ) 
        return next(new AppError(error?.details[0].message, 400));

    const { token, user } = await loginUserService(loginData);
    if( !user || !token ) 
        return next(new AppError('User login failed', 500));

    // Logic to handle user login using loginData
    res.status(200).json({ message: 'User logged in successfully', data: {user, token} });
})
