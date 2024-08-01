import express, { Express } from "express";
import { PrismaClient } from "@prisma/client";
import usersRouter from "./routes/userRoutes";
import { errorHandler } from "./middlewares/errorRenderer";
import postsRouter from "./routes/postRoutes";
import cors from "cors"

const app: Express = express();
app.use(cors());
app.use(express.json());
//routes
app.use("/api/v1/", usersRouter);
app.use("/api/v1/", postsRouter);
export const prismaClient = new PrismaClient({
  log: ["query"],
});
// Error handling middleware
app.use(errorHandler);
app.listen(3000, () => console.log("app has started successfully on 3000 Port "));
