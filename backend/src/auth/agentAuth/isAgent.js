import AppError from "../../errors/AppError.js";


const isAgentProtectedRoute = (req, res, next) => {

    if (!req.user) {
        return next(new AppError("Unauthorized access", 401));
    }

    if (req.user.role !== 'agent') {
        return next(new AppError("Forbidden: Admins only", 403));
    }

    next();
};

export default isAgentProtectedRoute