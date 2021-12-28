import express from "express";
import validateToken from "../../middleware/validateToken";
import { AuthController } from "./controller";

export class AuthRoutes extends AuthController {
  readonly path = "/auth";
  constructor() {
    super();
  }
  getRoutes() {
    const route = express.Router();

    route.post("/", this.register);
    route.get("/", this.login);
    route.get("/token", validateToken, this.validateToken);
    route.delete("/", this.logout);
    route.get("/user", this.checkUser);

    return route;
  }
}
