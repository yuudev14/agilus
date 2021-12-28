import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

interface Payload {
  user: string;
}

export default (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.cookie.toString().split("=")[1];
    if (token) {
      const validate = jwt.verify(token, process.env.JWT_SECRET) as Payload;
      res.locals.user = validate.user;
      next();
    } else {
      res.status(403).send({ err: "token not available" });
    }
  } catch (error) {
    console.log(error);
    res.status(403).send({ err: "token already expired" });
  }
};
