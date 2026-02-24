import { loginAgent } from '../../services/agent/agent.js';
import { asyncErrorHandler } from '../../utils/asyncErrorHandler.js';
import {loginSchemaValidation} from '../../validations/registerationJoiValidation.js'

// controller to handle user login
export const loginAgentController = asyncErrorHandler(async (req,res,next) => {
    
    if(!req.body || Object.keys(req.body).length === 0) {
        return next(new AppError('Request body is missing', 400));
    }
    const loginData = req.body;

    const { error } = loginSchemaValidation.validate(loginData);
    
    if( error ) 
        return next(new AppError(error?.details[0].message, 400));

    const { token, agent } = await loginAgent(loginData);
    if( !agent || !token ) 
        return next(new AppError('agent login failed', 500));
    console.log(token, agent);
    
    // Logic to handle agent login using loginData
    res.status(200).json({ message: 'agent logged in successfully', data: {agent, token} });
})

