import "reflect-metadata";
import { createConnection } from "typeorm";
import * as express from "express";

createConnection()
  .then(async () => {
    const app = express();
    const port = process.env.PORT || 4000;
    app.listen(port, () => {
      console.log(`listening to port ${port}`);
    });
  })
  .catch((error) => console.log(error));
