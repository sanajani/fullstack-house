// // properties controller
import AppError from '../../../errors/AppError.js';
import { createProperty, deletePropertyService, fetchPropertiesByAgent, fetchPropertyByIDService, updatePropertyService } from '../../../services/agent/propertiesServices.js';
import { asyncErrorHandler } from "../../../utils/asyncErrorHandler.js"
import { propertiesValidation } from '../../../validations/properties/properties.js'
import { uploadImagesToBunny } from '../../../middlewares/Bunny_CDN.js';

// // properties controller
// // add property 
export const createPropertyByAgentController = asyncErrorHandler(async (req,res,next) => {
    console.log(JSON.parse(req?.body?.amenities));
    
    const agentId = req.user?.id;
    const role = req.user?.role;
    

    if(!agentId || role !== 'agent') return next(new AppError("Invalid credentials", 403)) 
    if(!req.body || Object.keys(req.body).length === 0) return next(new AppError("Request body is missing", 400))

    const mediaMetadata = req.body.media_metadata.map(item => JSON.parse(item));
    
    // Create media array with URLs from uploaded files
    const mediaArray = req?.files?.map((file, index) => ({
        url: 'his is some', // or file.filename, or construct full URL
        public_id: mediaMetadata[index]?.public_id || Date.now() + index,
        caption: mediaMetadata[index]?.caption || "One of the beautiest house in the market",
        isPrimary: mediaMetadata[index]?.isPrimary || false
    })) || [];

          // Parse JSON strings
  const propertyData = {
    agent: req?.user?.id,
    title: req?.body?.title,
    description: req?.body?.description,
    propertyType: req?.body?.propertyType,
    amenities: JSON.parse(req?.body?.amenities),
    dealType: req?.body?.transaction,
    location: JSON.parse(req?.body?.location),
    details: JSON.parse(req?.body?.details),
    price: JSON.parse(req?.body?.price),
    media: mediaArray
  };

    // validation on req body
    const {error, value} = propertiesValidation.validate(propertyData);
    // console.log(value);
    
    if(error) {
        return next(new AppError(error.details[0].message, 400))
    }
    
    const property = await createProperty(value, agentId);

    const filesURL = await uploadImagesToBunny(property?._id, req?.files) || []

        // Create media array with URLs from uploaded files
    const cdnURL = filesURL?.map((file, index) => ({
        url: file?.url, // or file.filename, or construct full URL
        public_id: mediaMetadata[index]?.public_id || Date.now() + index,
        caption: mediaMetadata[index]?.caption || "One of the beautiest house in the market",
        isPrimary: mediaMetadata[index]?.isPrimary || false
    })) || [];
    property.media = cdnURL
    
    const newPorperty = await property.save();
    
    return res.status(201).json({
        message: "Successfully property created",
        data: newPorperty
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