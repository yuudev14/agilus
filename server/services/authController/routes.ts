import express from "express";
import { AuthController } from "./controller";

export class AuthRoutes extends AuthController {
  readonly path = "/auth";
  constructor() {
    super();
  }
  getRoutes() {
    const route = express.Router();

    route.get("/sample", this.register);

    return route;
  }
}
