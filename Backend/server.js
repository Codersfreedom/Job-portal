import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser';

import ConnectToDb from './DB/ConnectToDb.js';

import authRoutes from './routes/authRoutes.js'
import interviewRoutes from './routes/interviewRoutes.js'


const app = express();

dotenv.config();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth",authRoutes);
app.use("/api/interview",interviewRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    ConnectToDb();
    console.log(`Server is listening on port ${PORT}`);
})