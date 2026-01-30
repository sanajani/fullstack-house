import express from 'express';
import { 
    createPropertyByAgentController, 
    deleteProperty, 
    getAllPropertiesByAgentController, 
    getPropertyById, 
    updatePropertyById} from '../../controllers/agent/properties/Properties.js';

// // /api/v1/agent/property

// export default router;
const router = express.Router();

// Apply authentication middleware for all agent routes
// router.use(protectAgent);

// ----------------------
// /api/v1/agent/property
// ----------------------

// Create a new property
router.post("/property", createPropertyByAgentController);

// Get all properties of logged-in agent
router.get("/property", getAllPropertiesByAgentController);

// ----------------------
// /api/v1/agent/property/:propertyId
// ----------------------

// Get single property by ID
router.get("/property/:propertyId", getPropertyById);

// Update property by ID
router.put("/property/:propertyId", updatePropertyById);


// Delete property by ID
router.delete("/property/:propertyId", deleteProperty);

export default router;
