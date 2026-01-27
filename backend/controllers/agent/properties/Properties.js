// // properties controller
import AppError from '../../../errors/AppError.js';
import { createPropertiesService } from '../../../services/agent/propertiesServices.js';
import { asyncErrorHandler } from "../../../utils/asyncErrorHandler.js"
import { propertiesValidation } from '../../../validations/properties/properties.js'

// // add property
export const createProperty = asyncErrorHandler(async (req,res,next) => {
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

// get single property

// update a property

// delete a property
