// // properties controller
import AppError from '../../../errors/AppError.js';
import { createProperty, deletePropertyService, fetchPropertiesByAgent, fetchPropertyByIDService, updatePropertyService } from '../../../services/agent/propertiesServices.js';
import { asyncErrorHandler } from "../../../utils/asyncErrorHandler.js"
import { propertiesValidation } from '../../../validations/properties/properties.js'

// // properties controller
// // add property 
export const createPropertyByAgentController = asyncErrorHandler(async (req,res,next) => {
    
    const agentId = req.user?._id || '697a62488010053c82c340b3';
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

// // properties controller
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

// get single property by id
// // properties controller
export const getPropertyById = asyncErrorHandler(async (req,res,next) => {
    const propertyId = req.params.propertyId;
    const agentId = req.user?._id;
    if(!agentId) {
        return next("Invalid credentials",403)
    }
    if(!propertyId) {
        return next("Property ID is missing", 404)
    }
    const data = await fetchPropertyByIDService(propertyId, agentId);
    return res.status(200).json({
        message:"Success",
        data
    })
})


// update a property
export const updatePropertyById = asyncErrorHandler(async (req,res,next) => {
    const propertyId = req.params?.propertyId;
    const agentId = req.user?._id || '697a62488010053c82c340b3';
    const propertyData = req.body;
    const data = await updatePropertyService(propertyId, agentId, propertyData)
    return res.status(201).json({
        message:"Property updated successfully",
        data
    })
})

// // properties controller
// delete a property by ID
export const deleteProperty = asyncErrorHandler(async (req,res,next) => {
    const agentId = req.user?._id;
    const propertyId = req.params?.propertyId;
    
  await deletePropertyService(propertyId, agentId)
  return res.status(204).send()
})