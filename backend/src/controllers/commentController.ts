import { Request, Response } from "express";
import { prismaClient } from "../index";
import { commentValidation } from "../validations/postValidationSchema";

export const addCommentToPost = async (
  req: Request | any,
  res: Response
): Promise<any> => {
  const { content } = req.body;
  const userId = req.user?.userId;
  const { postid } = req.params;
  // Validate request data
  const validation = commentValidation.safeParse(req.body);
  if (!validation.success) {
    return res.json({ status: 400, message: validation.error.errors });
  }
  // Create the comment
  const newComment = await prismaClient.comment.create({
    data: {
      content: content,
      postId: Number(postid),
      authorId: userId,
    },
  });
  return res.json({
    status: 201,
    data: newComment,
  });
};

export const getAllCommentsOnPost = async (
  req: Request,
  res: Response
): Promise<any> => {
  const { postid } = req.params;
  // Validate postId
  if (!postid) {
    return res.status(400).json({ error: "Post ID is required" });
  }
  // Fetch the comments for the post
  const comments = await prismaClient.comment.findMany({
    where: {
      postId: Number(postid),
    },
    include: {
      author: true, // Include author information if needed
    },
  });
  return res.json({
    status: 200,
    data: comments,
  });
};
