import { Request, Response } from "express";
import { prismaClient } from "../index";
import { userValidation } from "../validations/usersValidationSchema";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const getAllUsers = async (
  req: Request,
  res: Response
): Promise<any> => {
  const users = await prismaClient.user.findMany({});
  return res.json({ status: 200, data: users });
};

export const createNewUsers = async (
  req: Request,
  res: Response
): Promise<any> => {
  //ensure validation of input values before hitting the database
  const validation = userValidation.safeParse(req.body);
  if (!validation.success)
    return res.json({ status: 400, message: validation.error.errors });
  // hitting database once validation got successful
  const { name, email, password } = req.body;
  //check if there is no other user with same email
  const isUserExist = await prismaClient.user.findFirst({
    where: {
      email: email,
    },
  });
  if (isUserExist)
    return res.json({
      status: 200,
      message: "The user with the same email already exist",
    });
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = await prismaClient.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });
  if (!newUser)
    return res.json({ status: 400, message: "Could not create new user" });
  return res.json({
    status: 201,
    message: "New user is created successfully",
    data: newUser,
  });
};

export const userLogin = async (req: Request, res: Response): Promise<any> => {
  const { email, password } = req.body;
  // Find the user by email
  const user = await prismaClient.user.findUnique({
    where: { email },
  });
  // If user not found, return an error
  if (!user) {
    return res.status(401).json({ message: "Invalid email or password" });
  }
  // Compare the provided password with the hashed password
  const isPasswordValid = await bcrypt.compare(password, user.password);
  // If password is incorrect, return an error
  if (!isPasswordValid) {
    return res.status(401).json({ message: "Invalid email or password" });
  }
  // Generate a JWT token
  const token = jwt.sign(
    { userId: user.id, email: user.email },
    process.env.JWT_SECRET!,
    {
      expiresIn: "1h",
    }
  );
  // Return the token and user info
  return res.json({
    status: 200,
    token,
    data: { id: user.id, email: user.email, name: user.name },
  });
};
