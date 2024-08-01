import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

interface AuthRequest extends Request {
  user?: {
    userId: number;
    email: string;
  };
}

const authMiddleware = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): any => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.json({
      status: 401,
      message: "Access denied. Your are an authorized.",
    });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as {
      userId: number;
      email: string;
    };
    req.user = decoded;
    next();
  } catch (error) {
    res.json({ status: 401, message: "Invalid token." });
  }
};

export default authMiddleware;
