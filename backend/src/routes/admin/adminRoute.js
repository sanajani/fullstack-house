import express from 'express';
import { isAuthenticateUser } from '../../auth/auth.js';
import { listUsersController, getUserController, deleteUserController, listPendingAgentsController, approveAgentRequestController } from '../../controllers/admin/userManagementController.js';
// import isAdminProtectedMiddleware  from '../../auth/adminAuth/adminAuth.js'

const router = express.Router();

// api/v1/admin
// router.get("/user", isAuthenticateUser, isAdminProtectedRoute,listUsersController)
router.get("/user", isAuthenticateUser,listUsersController);
router.get("/user/:userId", isAuthenticateUser,getUserController);
router.delete("/user/:userId", isAuthenticateUser,deleteUserController);

// api/v1/admin
router.get('/want-to-become-agent', isAuthenticateUser, listPendingAgentsController)
router.get('/tenant-to-agent/:userId', isAuthenticateUser, approveAgentRequestController)

export default router;
