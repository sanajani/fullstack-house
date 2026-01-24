import AppError from "../errors/AppError.js";
import UserModel from "../models/UserModel.js";

import bcrypt from 'bcryptjs';

export const registerUserService = async (userData) => {
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
