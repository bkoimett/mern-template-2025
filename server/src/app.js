import express from "express";
import connectDB from "./config/db.js";
import cors from "cors";
import authRoute from "./routes/UserRoutes.js";
import cookieParser from "cookie-parser";
const PORT = process.env.PORT || 3001;

// Middleware
const app = express();
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api/auth", authRoute);

// Start Server
app.listen(PORT, async () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  await connectDB();
});
