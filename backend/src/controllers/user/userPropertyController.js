// get all properties
import { getAllPropertiesService } from '../../services/user/propertiesServices.js';
import {asyncErrorHandler} from '../../utils/asyncErrorHandler.js'

export const allOfProperties = asyncErrorHandler(async (req,res,next) => {
    const properties =  getAllPropertiesService();
})

// get single property
