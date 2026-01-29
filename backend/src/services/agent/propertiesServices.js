import AppError from "../../errors/AppError.js";
import {PropertiesModel} from '../../models/properties/PropertiesModel.js'

export const createProperty = async (reqData, agentId) => {

    const property = new PropertiesModel({...reqData, agent: agentId})
    let savedProperty = await property.save();
    if(!savedProperty) throw new AppError("Something went wrong please check it", 409)

    return savedProperty
}

export const fetchPropertiesByAgent = async (agentId) => {
    console.log(agentId);
    
    // const properties = await PropertiesModel.find().populate("agent", "title _id description propertyType location")
    const properties = await PropertiesModel.find({agent: agentId}, 'title description propertyType transaction province').populate('agent' , "name")
    console.log(properties);
    
    if(!properties || properties.length === 0){
        throw new AppError("There is no property for that agent");
    }

    return properties
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