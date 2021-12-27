import { Request, Response } from "express";
import { AuthManager } from "./manager";
import bcrypt from "bcrypt";

export class AuthController {
  private manager: AuthManager;
  constructor() {
    this.manager = new AuthManager();
  }

  register = async (req: Request, res: Response): Promise<void> => {
    const { username, firstName, lastName, email, password } = req.body;
    const user = await this.manager.findUser(username, email);
    if (!user) {
      const salt = await bcrypt.genSalt(10);
      const encryptedPassword = await bcrypt.hash(password, salt);
      const registeredUser = await this.manager.register({
        firstName,
        username,
        lastName,
        email,
        password: encryptedPassword,
      });
      res.send(registeredUser);
    }
    res.status(403).send({ err: "user already exist" });
  };
}
