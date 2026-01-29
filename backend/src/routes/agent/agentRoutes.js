import express from 'express';
import { createPropertyByAgentController, getAllPropertiesByAgentController } from '../../controllers/agent/properties/Properties.js';

const router = express.Router();

// /api/v1/agent/property
router.route("/property")
.post(createPropertyByAgentController)
.get(getAllPropertiesByAgentController)


export default router;
