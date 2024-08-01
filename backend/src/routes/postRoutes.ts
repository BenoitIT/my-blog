import { Router } from "express";
import { catchAsyncErrors } from "../ErrorHandlers/asyncErrorsHandler";
import { createPost, getAllPosts, getAllPostsByUser } from "../controllers/postController";
import { addCommentToPost, getAllCommentsOnPost } from "../controllers/commentController";
import authMiddleware from "../middlewares/authMiddleware";

const postsRouter: Router = Router();
postsRouter.get("/posts", catchAsyncErrors(getAllPosts));
postsRouter.post("/posts", authMiddleware,catchAsyncErrors(createPost));
postsRouter.get("/user/posts",authMiddleware, catchAsyncErrors(getAllPostsByUser));
postsRouter.post("/post/:postid/comment", authMiddleware,catchAsyncErrors(addCommentToPost));
postsRouter.get("/post/:postid/comments", catchAsyncErrors(getAllCommentsOnPost));

export default postsRouter