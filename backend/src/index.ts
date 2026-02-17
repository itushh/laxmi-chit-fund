import express from "express";
import { connectDB } from "./lib/db.js";
import { authRouter } from "./routes/auth.route.js";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.status(200).json({
    message: "server running",
    health: "good"
  });
});

app.use('/api/auth', authRouter);

app.listen(PORT, async () => {
  await connectDB();
  console.log(`running on port ${PORT}`);
});