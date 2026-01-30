// get all properties
import { getAllPropertiesService } from '../../services/user/propertiesServices.js';
import {asyncErrorHandler} from '../../utils/asyncErrorHandler.js';


export const allOfProperties = asyncErrorHandler(async (req,res,next) => {
    const {transaction, location, minPrice, maxPrice, page, limit} = req.query;

    const properties = await getAllPropertiesService(transaction, location, minPrice, maxPrice, page, limit);

    return res.status(200).json({
        message:"Success",
        data: properties
    })
})

// get single property
