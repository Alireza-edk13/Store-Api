import { NextFunction, Request, Response } from "express";
import userModel from "../models/User";
import jwt, { JwtPayload } from "jsonwebtoken";
import { AuthenticatedRequest } from "../interfaces/auth";


const authenticated = async (req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<void> => {
  const authorizationHeader = req.header("Authorization")?.split(" ");
  

  if (authorizationHeader?.length !== 2) {
    res.status(403).json({
      message: "This route is protected and you can't have access to it.",
    });
    return
  }

  const token = authorizationHeader[1];

  try {
    const { email } = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET_KEY as string) as JwtPayload;

    const user = await userModel.findOne({ email }).lean();
    if (!user) {
      res.status(401).json({ message: "Invalid Token" });
      return
    }

    req.user = user;

    next();
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      error.message = "Expired Token";
      res.status(401).json({ message: error.message });
    } else if (error instanceof jwt.JsonWebTokenError) {
      error.message = "Invalid Token";
      res.status(401).json({ message: error.message });
    } else {
      if (error instanceof Error) {
        res.status(500).json({ message: error.message || "Unexpected error" });
      } else {
        res.status(500).json({ message: "Unexpected error" });
      }
    }
  }
};

export default authenticated;
