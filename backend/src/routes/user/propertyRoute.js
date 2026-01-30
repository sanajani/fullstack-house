import express from 'express';
import { allOfProperties } from '../../controllers/user/userPropertyController.js';

// app.use('/api/v1/properties', properties);
const router = express.Router();
router.get('/', allOfProperties)

export default router;
