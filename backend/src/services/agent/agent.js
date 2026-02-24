// import UserModel from "../../models/UserModel,js";
import UserModel from '../../models/UserModel.js'
import bcrypt from 'bcryptjs'
import generateJWTToken from '../../utils/generateJWTToken.js'

// Service to login user
export const loginAgent = async (userData) => {
    
    const agent = await UserModel.findOne({ phoneNumber1: userData.phoneNumber1 }).select('+password name lastName phoneNumber1 email username province role');
    
    if(!agent) throw new AppError('Invalid phone number or password', 401);
    
    const isPasswordValid = await bcrypt.compare(userData.password, agent.password);
    if(!isPasswordValid) throw new AppError('Invalid phone number or password', 401);
    const token = generateJWTToken(agent);
    // user.token = token;
    agent.password = undefined;
    return {token, agent};
}
