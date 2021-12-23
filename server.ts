import { Request, Response } from "express";
import express from "express";

const app = express();

const port = process.env.PORT || 4000;

app.get("/api", (_, res: Response) => {
  res.send("hellof");
});

app.listen(port, (): void => {
  console.log(`you are listening to port ${port}`);
});
