import { z } from "zod";

export const postValidation = z.object({
  title: z.string().min(4),
  content: z.string().min(20),
});
export const commentValidation = z.object({
  content: z.string().min(20),
});

