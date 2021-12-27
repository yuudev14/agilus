import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
export default (userId: string): string => {
  try {
    const payload = {
      user: userId,
    };
    return jwt.sign(payload, process.env.JWT_SECRET);
  } catch (error) {
    console.log(error);
  }
};
