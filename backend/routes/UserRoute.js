import express from 'express';
import { registerUser, loginUser, getUserProfile, allUsers, updateUserProfile } from '../controllers/userController.js';
import { isAuthenticateUser } from '../auth/auth.js';

const router = express.Router();

// Sample user data
// ==>  api/v1/users/register
router.post('/register', registerUser);

// ==>  api/v1/users/login
router.post('/login', loginUser);

// ==>  api/v1/users/me
router.get('/me', isAuthenticateUser, getUserProfile);

// ==>  api/v1/users/me
router.put('/me', isAuthenticateUser, updateUserProfile);

router.get('/all', allUsers);


export default router;

