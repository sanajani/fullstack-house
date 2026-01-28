import AppError from "../errors/AppError.js";
import verifyToken from "../utils/verifyToken.js";

export const isAuthenticateUser = (req, res, next) => {
    const authHeader = req?.headers?.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return next(new AppError('Authorization header missing or malformed', 401));
    }

    const token = authHeader.split(' ')[1];
    console.log(token);
    

    try {
        const decoded = verifyToken(token);
        console.log(decoded);
        req.user = decoded;

        next();
        
    } catch (error) {
        next(error);
    }
};
