import mongoose from 'mongoose'

 const ConnectToDb = async () => {
  try {
    const response = await mongoose.connect(process.env.MONGODB_URI);
    console.log('Server connected to '+response.connections[0].host)
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

export default ConnectToDb;