import AppError from "../../errors/AppError.js";
import {PropertiesModel} from '../../models/properties/PropertiesModel.js'

export const createPropertiesService = async (reqData) => {

        const property = new PropertiesModel(reqData)
        let savedProperty = await property.save();
        if(!savedProperty) throw new AppError("Something went wrong please check it", 409)

        return savedProperty
}


    // const {
    //     title, 
    //     description, 
    //     propertyType, 
    //     transaction, 
    //     location= {}, 
    //     details= {},
    //     amenities, 
    //     price= {}, 
    //     media= []
    // } = reqData;
    //     const {
    //         province, city, district,
    //         streetAddress, exactLocation, landmark
    //     } = location;
    //     const {
    //         bedroom, bathroom, area,
    //         floor, totalFloor, yearBuild,
    //         furniture, parking, security
    //     } = details;
    //     const {
    //         amount, currency,
    //         period, negotiable
    //     } = price;