import { Request, Response } from "express";
import { AuthManager } from "./manager";

export class AuthController {
  readonly manager: AuthManager;
  constructor() {
    this.manager = new AuthManager();
  }

  register(req: Request, res: Response) {
    console.log("asdas");
    res.send("asasas");
  }
}
