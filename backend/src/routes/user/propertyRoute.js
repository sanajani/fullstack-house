import express from 'express';
import { allOfProperties } from '../../controllers/user/userPropertyController.js';

const router = express.Router();
// /
router.get('/properties', allOfProperties)

export default router;
