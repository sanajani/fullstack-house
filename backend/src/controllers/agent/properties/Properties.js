// // properties controller
import AppError from '../../../errors/AppError.js';
import { createProperty, fetchPropertiesByAgent } from '../../../services/agent/propertiesServices.js';
import { asyncErrorHandler } from "../../../utils/asyncErrorHandler.js"
import { propertiesValidation } from '../../../validations/properties/properties.js'

// // add property
export const createPropertyByAgentController = asyncErrorHandler(async (req,res,next) => {
    const agentId = req.user?._id || '697a5f977fe150abe9e37c60';
    const isAgent = req.user?.role || 'agent';
    if(!agentId || !isAgent === 'agent') return next(new AppError("Invalid credintials", 409)) 
    if(!req.body || Object.keys(req.body).length === 0) return next(new AppError("Request body is missing", 400))

    // validation on req body
    const {error} = propertiesValidation.validate(req.body);
    if(error) {
        return next(new AppError(error.details[0].message, 400))
    }

    const property = await createProperty(req.body, agentId);

    return res.status(200).json({
        message: "Successfully property created",
        data: property
    })
})


// get all properties
export const getAllPropertiesByAgentController = asyncErrorHandler(async (req,res,next) => {
    const agentId = req.user._id || '697a5f977fe150abe9e37c60';
    if(!agentId) {
        return next(new AppError("User Id is missing", 400))
    }
    
    const allProperties = await fetchPropertiesByAgent(agentId);

    return res.status(200).json({
        message: "Success",
        data: allProperties
    })
})

// get single property

// update a property

// delete a property
