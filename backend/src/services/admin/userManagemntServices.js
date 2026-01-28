import AppError from "../../errors/AppError.js";
import UserModel from "../../models/UserModel.js";
import WantToBecomeAgentModel from "../../models/wantToBecomeAgent.js";

export const getAllUsersServices = async () => {
    const allUsers = await UserModel.find();
    console.log(allUsers);
    
    return allUsers
}

export const getUserByIdService = async (userId) => {
    const user = await UserModel.findById(userId)
    if(!user) throw new AppError("User Not Found ",404);

    return user
}

export const getUserByIdAndDeleteService = async (userId) => {
    const user = await UserModel.findByIdAndDelete(userId);
    if(!user) throw new AppError("User Not Found", 404);

    return true;
}

export const pendingAgentRequestServices = async () => {
    const pendingAgents = await WantToBecomeAgentModel.find().populate('userId', 'name phoneNumber1 agentInfo agentRequestStatus');
    if(!pendingAgents || pendingAgents.length === 0){
        throw new AppError('There is no agent pending', 404);
    }
    return pendingAgents
}


export const tenantToAgentAcceptService = async (userId) => {
    // console.log(userId);
    
    let isUserExist = await UserModel.findOne({_id: userId});
    console.log('what you got',isUserExist);

    if(!isUserExist) throw new AppError("User NOT Fount to change role", 404);

    isUserExist.role = 'agent';
    isUserExist.agentRequestStatus = 'approved'
    const becomedAgent = await isUserExist.save();
    return becomedAgent
}