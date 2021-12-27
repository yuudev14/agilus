import express from "express";
import authEndpoints from "./services/authController/enpoints";

const app = express();

app.use("/auth", authEndpoints);

export default app;
