import jwt from 'jsonwebtoken';
import AppError from '../errors/AppError.js';

const verifyToken = (token) => {
    console.log(token);
    
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log(decoded);
        
        return decoded;
    } catch (error) {
        throw new AppError('Invalid or expired token', 401);
    }
};

export default verifyToken;
