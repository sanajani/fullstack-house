import AppError from "../errors/AppError.js";
import UserModel from "../models/UserModel.js";
import WantToBecomeAgentModel from "../models/wantToBecomeAgent.js";

import generateJWTToken from "../utils/generateJWTToken.js";

import bcrypt from 'bcryptjs';

export const registerUserService = async (userData) => {
    console.log('services');
    
    // Business logic for registering a user would go here
    const isUserExists = await UserModel.findOne({
        $or: [
            { email: userData.email }, 
            { username: userData.username }, 
            { phoneNumber1: userData.phoneNumber1 }
        ]
    })
    if(isUserExists) throw new AppError('User already exist', 409);

    userData.password = await bcrypt.hash(userData.password, 12);


    const newUser = new UserModel(userData);
    return await newUser.save();
};

export const loginUserService = async (userData) => {
    const user = await UserModel.findOne({ phoneNumber1: userData.phoneNumber1 }).select('+password');
    if(!user) throw new AppError('Invalid phone number or password', 401);

    const isPasswordValid = await bcrypt.compare(userData.password, user.password);
    if(!isPasswordValid) throw new AppError('Invalid phone number or password', 401);
    const token = generateJWTToken(user);
    // user.token = token;
    user.password = undefined;
    return {token, user};

}

export const getUserProfileService = async (userId) => {
    const user = await UserModel.findById(userId);
    if(!user) throw new AppError('User not found', 404);
    return user;
}

export const updateUserProfileService = async (userId, updateData) => {
    const updatedUser = await UserModel.findByIdAndUpdate(userId, updateData, { new: true });
    return updatedUser;
}

export const updateUserToAgentProfileService = async (userId, userData) => {
    const existingUser = await UserModel.findById(userId);
    if(!existingUser) {
        throw new AppError('User not found', 404);
    }
    if(existingUser.hasRequestedAgent) {
        throw new AppError('User has already requested to become an agent', 400);
    }
        const {
  name,
  lastName,
  phoneNumber1,
  phoneNumber2,
  email,
  username,
  province,
  district,
  role,
  hasRequestedAgent,
  agentRequestStatus,
  agentInfo
    } = userData;
    if(role){
        throw new AppError('user can not change role', 400);
    }
    const {
    licenseNumber,
    agencyName,
    experienceYears,
    specialization,
    bio,
    profilePicture,
    isVerifiedAgent,
    } = agentInfo || {};

    if(!name || !lastName || !phoneNumber1 || !phoneNumber2 || !username || !province || !district || !agencyName ) {
    throw new AppError('All fields are required to become an agent', 400);
    }
    const updatedAgentStatus = await UserModel.findByIdAndUpdate(userId, 
        {
            name,
            lastName,
            phoneNumber1,
            email,
            username,
            province,
            district,
            hasRequestedAgent: true,
            agentRequestStatus: 'pending',
            phoneNumber2,
            agentInfo: {
                licenseNumber,
                agencyName,
                experienceYears,
                specialization,
                bio,
                profilePicture,
                isVerifiedAgent
            }
        },
        { new: true }
    );
    if(!updatedAgentStatus) {
        throw new AppError('Failed to update user to agent', 500);
    }
    const wantToBecomeAgent = new WantToBecomeAgentModel({ userId });
    await wantToBecomeAgent.save();
    return updatedAgentStatus;
}
