import "reflect-metadata";
import { Connection, createConnection } from "typeorm";
import { App } from "./app";

(async () => {
  try {
    await createConnection();
    console.log("sss");
    new App().start();
  } catch (error) {
    console.log(error);
  }
})();
