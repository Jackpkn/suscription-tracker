import express from "express";
import { PORT } from "./config/env.js";
import authRouter from "./routes/auth.routes.js";
import userRouter from "./routes/user.routes.js";
import suscriptionRouter from "./routes/suscription.routes.js";
const app = express();
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/suscriptions", suscriptionRouter);
app.get("/", (req, res) => {
  res.send("Welcome to the Suscription tracker API!");
});
app.listen(PORT, () => {
  console.log(`Suscription Tacker API is running on http://localhost:${PORT}`);
});
export default app;
