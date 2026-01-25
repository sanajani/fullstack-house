import AppError from "../errors/AppError.js";
import UserModel from "../models/UserModel.js";

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