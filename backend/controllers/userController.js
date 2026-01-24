import AppError from '../errors/AppError.js';
import { registerUserService } from '../services/userServices.js';
import { asyncErrorHandler } from '../utils/asyncErrorHandler.js';
import { registerationSchemaValidation } from '../validations/registerationJoiValidation.js';


export const registerUser = asyncErrorHandler(async (req,res, next) => {
    const userData = req.body;

    // Logic to handle user registration using userData
    console.log('before validation');
    
    const { error } = registerationSchemaValidation.validate(userData);
    if( error ) {
        return next(new AppError(error.details[0].message, 400));
    }
    console.log('after validation');

    const user = await registerUserService(userData);
    if(!user) {
        return next(new AppError('User registration failed', 500));
    }

    res.status(201).json({ message: 'User registered successfully', data: user });
});
