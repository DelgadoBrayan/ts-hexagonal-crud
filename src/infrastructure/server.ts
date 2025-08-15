import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./database/conectDB";
import userRoutes from "./routes/userRoutes";
import { errorHandler } from "./middlewares/errorHandler";

dotenv.config();
const app = express();
app.use(express.json());

// Registrar rutas
app.use("/users", userRoutes);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
});
