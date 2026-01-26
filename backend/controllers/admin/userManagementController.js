import AppError from "../../errors/AppError.js";
import { getAllUsersServices, getUserByIdAndDeleteService, getUserByIdService, pendingAgentRequestServices } from "../../services/admin/userManagemntServices.js";
import { asyncErrorHandler } from "../../utils/asyncErrorHandler.js";

// get all users
export const getAllUsers = asyncErrorHandler(async (req,res,next) => {
    const allUsers = await getAllUsersServices()
    if(!allUsers || allUsers.length === 0){
        return next(new AppError("Users Not Found", 404))
    }
    res.status(200).json({
        message:"Success",
        data: allUsers
    })
})

// get user by id
export const getUserById = asyncErrorHandler(async (req,res,next) => {
    const {userId} = req.params;
    
    if(!userId) return next(new AppError("User ID is Missing", 404));
    const user = await getUserByIdService(userId);

    res.status(200).json({
        message:"Success",
        data: user
    })
})

// delete user by id
export const getUserByIdAndDelete = asyncErrorHandler(async (req, res, next) => {
    const {userId} = req.params;
    if(!userId) return next(new AppError("User ID is Missing", 404));

    await getUserByIdAndDeleteService(userId);

    res.status(200).json({
        message:"Success",
        data: true
    })
}) 

// all pending agents
export const pendingAgentRequest = asyncErrorHandler(async (req,res, next) => {
    const pendingAgents = await pendingAgentRequestServices();
    return res.status(200).json({
        message: "Success",
        data: pendingAgents
    })
})