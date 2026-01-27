import express from 'express';
import { createProperty } from '../../controllers/agent/properties/Properties.js';

const router = express.Router();

// /api/v1/agent/property
router.route("/property")
.post(createProperty)


export default router;
