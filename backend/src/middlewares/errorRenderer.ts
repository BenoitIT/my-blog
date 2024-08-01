import { Prisma } from "@prisma/client";
import { NextFunction, Request, Response } from "express";

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    // Handle known Prisma errors
    return res
      .status(400)
      .json({ message: "Database request error", detail: err.message });
  }
  if (err instanceof Prisma.PrismaClientValidationError) {
    // Handle validation errors
    return res.status(400).json({
      message: "inputs values validation error.check your inputs validity",
      detail: err.message,
    });
  }

  // Handle other errors
  res.status(500).json({ message: "An unexpected error occurred" });
};
