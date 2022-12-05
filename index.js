import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.js";
import goalRoutes from "./routes/goals.js";
import toDoRoutes from "./routes/toDos.js";
import progressRoutes from "./routes/progress.js";


const app = express();
dotenv.config();

const establishConnection = () => {
  mongoose
    .connect(process.env.MONGO_DB)
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch(() => {
      console.log("Something went wrong with MongoDB");
    });
};

app.use(express.json());
app.use(cors({
  origin: "https://organizer-react-app.onrender.com/",
  credentials: true
}));
app.use(cookieParser());
app.use("/api/auth", authRoutes);
app.use("/api/goals", goalRoutes);
app.use("/api/toDos", toDoRoutes);
app.use("/api/progress", progressRoutes);

app.listen(process.env.PORT || 8000, () => {
  establishConnection();
  console.log("Server running on port 8000");
});