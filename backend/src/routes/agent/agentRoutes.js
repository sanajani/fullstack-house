import express from 'express';
import { 
    createPropertyByAgentController, 
    deleteProperty, 
    getAllPropertiesByAgentController, 
    getPropertyById, 
    updatePropertyById} from '../../controllers/agent/properties/Properties.js';
import { upload } from '../../middlewares/multer.js';
import isAgentProtectedRoute from '../../auth/agentAuth/isAgent.js';
import { isAuthenticateUser } from '../../auth/auth.js';

// // /api/v1/agent/property

// export default router;
const router = express.Router();

// Apply authentication middleware for all agent routes
// in frontend you take token from local storage which is not updated on become agent so you get tenant update the token 
router.use(isAuthenticateUser, isAgentProtectedRoute);

// ----------------------
// /api/v1/agent/property
// ----------------------

// Create a new property
router.post("/property", upload.array("media", 30),createPropertyByAgentController);

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
