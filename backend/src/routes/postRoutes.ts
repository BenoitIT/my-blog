import { Router } from "express";
import { catchAsyncErrors } from "../ErrorHandlers/asyncErrorsHandler";
import { createPost, deletePost, getAllPosts, getAllPostsByUser, getSinglePost, updatePost } from "../controllers/postController";
import { addCommentToPost, getAllCommentsOnPost } from "../controllers/commentController";
import authMiddleware from "../middlewares/authMiddleware";

const postsRouter: Router = Router();
postsRouter.get("/posts", catchAsyncErrors(getAllPosts));
postsRouter.post("/posts", authMiddleware,catchAsyncErrors(createPost));
postsRouter.get("/user/posts",authMiddleware, catchAsyncErrors(getAllPostsByUser));
postsRouter.post("/post/:postid/comment", authMiddleware,catchAsyncErrors(addCommentToPost));
postsRouter.get("/post/:postid/comments", catchAsyncErrors(getAllCommentsOnPost));
postsRouter.get("/post/:postid", catchAsyncErrors(getSinglePost));
postsRouter.delete("/post/:postid", catchAsyncErrors(deletePost));
postsRouter.patch("/post/:postid", catchAsyncErrors(updatePost));

export default postsRouter