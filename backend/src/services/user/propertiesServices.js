import AppError from '../../errors/AppError.js';
import {PropertiesModel} from '../../models/properties/PropertiesModel.js'

export const getAllPropertiesService = async (transaction, city, minPrice, maxPrice, page, limit) => {
    const pageNumber = parseInt(page) || 1;
    const limitItems = parseInt(limit) || 1;

    let query = {}

    if(transaction) query['transaction'] = transaction;
    if(city) query['location.city'] = city;
    if(minPrice || maxPrice){
        query['price.amount'] = {}
        if(minPrice) query['price.amount'].$lte = parseInt(minPrice);
        if(maxPrice) query['price.amount'].$gte = parseInt(maxPrice);
    }
    const properties = await PropertiesModel.find(query)
        .skip((pageNumber - 1 )* limitItems)
        .limit(limitItems)
        .sort({createdAt: -1});
    
    const totalDocuments = await PropertiesModel.countDocuments(query);
    const pages = Math.ceil(totalDocuments / limitItems);
    
    
    if(!properties || properties.length === 0) {
        throw new AppError("There is no data", 400)
    }

    return {properties, pageNumber, pages}
}