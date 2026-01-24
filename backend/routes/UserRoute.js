import express from 'express';
import { registerUser } from '../controllers/userController.js';

const router = express.Router();

// Sample user data
// ==>  api/v1/users
router.route("/users")
    .post(registerUser);

export default router;

