import AppError from "../../errors/AppError.js";


const isAdminProtectedRoute = (req,res,next) => {
    try {
        const isUser = req?.user;
        if(!isUser) return next(new AppError("Token Not Found line6", 404))
        
        const isAdmin = isUser.role === 'admin';
        if(!isAdmin) return next(new AppError("forbidden User", 403));
        next()
    } catch (error) {
        next(error)
    }
}

export default isAdminProtectedRoute