import mongoose from 'mongoose';


const dbURL = process.env.MONGODB_URI || 'mongodb://localhost:27017/housedbtestingfornow';
const connectToMongoDB = async () => {
  try {
    await mongoose.connect(dbURL);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};
export default connectToMongoDB;