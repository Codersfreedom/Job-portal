import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import ConnectToDb from "./DB/ConnectToDb.js";

import companyRoutes from "./routes/company.routes.js";
import studentRoutes from "./routes/student.routes.js";
import jobRoutes from "./routes/job.routes.js";


const app = express();

dotenv.config();

app.use(express.json());
app.use(cookieParser());

app.use("/api/company", companyRoutes);
app.use("/api/student", studentRoutes);
app.use("/api/job",jobRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  ConnectToDb();
  console.log(`Server is listening on port ${PORT}`);
});
