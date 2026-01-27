// // properties controller
import AppError from '../../../errors/AppError.js';
import { createPropertiesService, getAllPropertiesServices } from '../../../services/agent/propertiesServices.js';
import { asyncErrorHandler } from "../../../utils/asyncErrorHandler.js"
import { propertiesValidation } from '../../../validations/properties/properties.js'

// // add property
export const createPropertyByAgent = asyncErrorHandler(async (req,res,next) => {
    if(!req.body || Object.keys(req.body).length === 0) return next(new AppError("Request body is missing", 400))

    // validation on req body
    const {error} = propertiesValidation.validate(req.body);
    if(error) {
        return next(new AppError(error.details[0].message, 400))
    }

    const property = await createPropertiesService(req.body);

    return res.status(200).json({
        message: "Successfully property created",
        data: property
    })
})


// get all properties
export const getAllPropertiesByAgent = asyncErrorHandler(async (req,res,next) => {
    // const agentId = req.user;
    const agentId = '64f1a2b3c4d5e6f7a8b9c0d1'
    if(!agentId) return next(new AppError("User Id is missing", 400))
    
    const allProperties = await getAllPropertiesServices(agentId);

    return res.status(200).json({
        message: "Success",
        data: allProperties
    })
})

// get single property

// update a property

// delete a property
