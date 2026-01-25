import 'dotenv/config';
import express from 'express';
import connectToMongoDB from './db/mongodbConnection.js';
import cors from 'cors';
import customError from './errors/customError.js';

const app = express();
const PORT = process.env.PORT || 5000;

// import  UserRoute
import UserRoute from './routes/UserRoute.js';

app.use(cors());
app.use(express.json());

// Use UserRoute for user-related endpoints
app.use('/api/v1/users', UserRoute);

// 404 Error handling middleware
app.use((req, res) => {
    res.status(404).json({ error: 'Route not found' });
});

// Global Error Handling Middleware
app.use(customError);

// Start the server
app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server is running on http://localhost:${PORT}`);
});
