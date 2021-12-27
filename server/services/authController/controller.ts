import { Request, Response } from "express";
import { AuthManager } from "./manager";
import bcrypt from "bcrypt";
import generateToken from "../../utils/generateToken";

export class AuthController {
  private manager: AuthManager;
  constructor() {
    this.manager = new AuthManager();
  }

  readonly register = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    try {
      const { username, firstName, lastName, email, password } = req.body;
      const user = await this.manager.findUserForRegister(username, email);
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
        const token = generateToken(registeredUser.id);
        return res.send({
          user: registeredUser,
          token,
        });
      }
      return res.status(403).send({ err: "user already exist" });
    } catch (error) {
      console.log(error);
    }
  };

  readonly login = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { usernameOrEmail, password } = req.query;
      const user = await this.manager.findUserForLogin(
        usernameOrEmail.toString()
      );
      if (user) {
        const decryptPassword = await bcrypt.compare(
          password.toString(),
          user.password
        );
        if (decryptPassword) {
          const token = generateToken(user.id);
          return res.send({
            user,
            token,
          });
        }
        return res.status(403).send({ err: "wrong username" });
      }
      return res.status(404).send({ err: "user not found" });
    } catch (error) {}
  };
}
