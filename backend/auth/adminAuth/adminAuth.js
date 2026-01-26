import AppError from "../../errors/AppError.js";
import verifyToken from "../../utils/verifyToken.js";

const isAdminProtectedMiddleware = (req, res, next) => {
    const headers = req?.headers?.authorization;

    if(!headers || !headers.startsWith("Bearer ")){
        return next(new AppError("Authorization header missing", 401));
    }
    try {
        const token = headers.split(" ")[1];
        const decoded = verifyToken(token);

        req.user = decoded
        next()
    } catch (error) {
        next(error)
    }

}

export default isAdminProtectedMiddleware;
