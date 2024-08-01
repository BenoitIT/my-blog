import { Response, Request } from "express";
import { prismaClient } from "../index";
import { postValidation } from "../validations/postValidationSchema";

export const getAllPosts = async (
  req: Request,
  res: Response
): Promise<any> => {
  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 10;
  // Calculate the offset
  const offset = (page - 1) * limit;
  // Fetch the total count of posts
  const totalPosts = await prismaClient.post.count();
  // Fetch the posts for the current page
  const posts = await prismaClient.post.findMany({
    skip: offset,
    take: limit,
  });
  // Calculate the total number of pages
  const totalPages = Math.ceil(totalPosts / limit);
  //generate paginated response
  return res.json({
    status: 200,
    data: posts,
    pagination: {
      totalPosts,
      currentPage: page,
      totalPages,
      limit,
    },
  });
};

export const createPost = async (
  req: Request | any,
  res: Response
): Promise<any> => {
  //validate body
  const validation = postValidation.safeParse(req.body);
  if (!validation.success)
    return res.json({ status: 400, message: validation.error.errors });
  const { title, content } = req.body;
  const userId = req.user?.userId;
  //check if there is no post with the same title
  const isPostExist = await prismaClient.post.findFirst({
    where: {
      title: title,
    },
  });
  if (isPostExist)
    return res.json({
      status: 400,
      message: "The post with the same title already exist",
    });
  const newPost = await prismaClient.post.create({
    data: {
      title,
      content,
      authorId: userId,
    },
  });
  // Return a successful response
  return res.json({
    status: 201,
    message: "Post created successfully",
    data: newPost,
  });
};

export const getAllPostsByUser = async (
  req: Request|any,
  res: Response
): Promise<any> => {
  const userId = req.user?.userId;
  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 10;
  // Calculate the offset
  const offset = (page - 1) * limit;
  // Fetch the total count of posts by the user
  const totalPosts = await prismaClient.post.count({
    where: {
      authorId: userId,
    },
  });
  // Fetch the posts for the current page by the user
  const posts = await prismaClient.post.findMany({
    where: {
      authorId: userId,
    },
    skip: offset,
    take: limit,
  });
  // Calculate the total number of pages
  const totalPages = Math.ceil(totalPosts / limit);
  // Generate paginated response
  return res.json({
    status: 200,
    data: posts,
    pagination: {
      totalPosts,
      currentPage: page,
      totalPages,
      limit,
    },
  });
};
