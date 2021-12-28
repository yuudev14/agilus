import { Request, Response } from "express";
import { AuthManager } from "./manager";
import bcrypt from "bcrypt";
import generateToken from "../../utils/generateToken";

export class AuthController {
  private manager: AuthManager;
  constructor() {
    this.manager = new AuthManager();
  }

  readonly checkUser = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    const { column, value } = req.query;
    const user = await this.manager.findUser(column, value);
    if (user) return res.send(false);
    return res.send(true);
  };

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
        res.cookie("agilus_jwt", token);
        return res.send({
          user: {
            username: registeredUser.username,
            email: registeredUser.email,
            firstName: registeredUser.firstName,
            lastName: registeredUser.lastName,
          },
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
          res.cookie("agilus_jwt", token);
          return res.send({
            user: {
              username: user.username,
              email: user.email,
              firstName: user.firstName,
              lastName: user.lastName,
            },
          });
        }
        return res.status(403).send({ password: "wrong password" });
      }
      return res.status(404).send({ usernameOrEmail: "user not found" });
    } catch (error) {}
  };

  readonly validateToken = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    try {
      const userId = res.locals.user;
      const user = await this.manager.findUser("id", userId);
      return res.send({
        user: {
          username: user.username,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  readonly logout = (_, res: Response): Response => {
    res.clearCookie("agilus_jwt");
    return res.sendStatus(200);
  };
}
