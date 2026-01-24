import { asyncErrorHandler } from '../utils/asyncErrorHandler.js';
import { registerationSchemaValidation } from '../validations/registerationJoiValidation.js';


export const registerUser = (req,res) => {
    const userData = req.body;
    // Logic to handle user registration using userData
    const { error } = registerationSchemaValidation.validate(userData);


    
};
