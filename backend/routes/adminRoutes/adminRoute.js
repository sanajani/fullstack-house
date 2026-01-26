import express from 'express';
import { isAuthenticateUser } from '../../auth/auth.js';
import isAdminProtectedRoute from '../../auth/adminAuth/isAdmin.js';
// import isAdminProtectedMiddleware  from '../../auth/adminAuth/adminAuth.js'


const router = express.Router();

// api/v1/admin/users
router.get("/user", isAuthenticateUser, isAdminProtectedRoute,async (req,res,next) => {
    res.status(200).json({
        message:"Success"
    })
})

export default router;
