import { z } from "zod";

export const userValidation = z.object({
  name: z.string().min(2),
  password: z.string().min(4),
  email: z.string().email(),
});
