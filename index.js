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

app.use(
  cors({
    origin: "https://organizer-react-app.onrender.com",
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRoutes);
app.use("/api/goals", goalRoutes);
app.use("/api/toDos", toDoRoutes);
app.use("/api/progress", progressRoutes);

mongoose
  .connect(process.env.MONGO_DB)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server listening on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("Could not connect to MongoDB", err);
  });
