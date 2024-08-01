import { Router } from "express";
import {
  createNewUsers,
  getAllUsers,
  userLogin,
} from "../controllers/userController";
import { catchAsyncErrors } from "../ErrorHandlers/asyncErrorsHandler";
const usersRouter: Router = Router();
usersRouter.get("/users", catchAsyncErrors(getAllUsers));
usersRouter.post("/users/signup", catchAsyncErrors(createNewUsers));
usersRouter.post("/users/login", catchAsyncErrors(userLogin));
export default usersRouter;
