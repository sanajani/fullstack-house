import express from 'express';
import { createPropertyByAgent, getAllPropertiesByAgent } from '../../controllers/agent/properties/Properties.js';

const router = express.Router();

// /api/v1/agent/property
router.route("/property")
.post(createPropertyByAgent)
.get(getAllPropertiesByAgent)


export default router;
