"use client";
import { z } from "zod";

export const subscribeSchema = z.object({
  email: z.string().email("Email is not valid"),
});
