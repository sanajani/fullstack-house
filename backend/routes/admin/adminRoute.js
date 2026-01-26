import express from 'express';
import { isAuthenticateUser } from '../../auth/auth.js';
import isAdminProtectedRoute from '../../auth/adminAuth/isAdmin.js';
import { getAllUsers, getUserById, getUserByIdAndDelete, pendingAgentRequest } from '../../controllers/admin/userManagementController.js';
// import isAdminProtectedMiddleware  from '../../auth/adminAuth/adminAuth.js'


const router = express.Router();

// api/v1/admin
// router.get("/user", isAuthenticateUser, isAdminProtectedRoute,getAllUsers)
router.get("/user", isAuthenticateUser,getAllUsers);
router.get("/user:userId", isAuthenticateUser,getUserById);
router.delete("/user:userId", isAuthenticateUser,getUserByIdAndDelete);

// api/v1/admin
router.get('/want-to-become-agent', isAuthenticateUser, pendingAgentRequest)

export default router;
