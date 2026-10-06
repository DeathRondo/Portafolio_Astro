import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string().max(160),
      stack: z.array(z.string()).min(1),
      roles: z.object({
        frontend: z.string().optional(),
        backend: z.string().optional(),
        database: z.string().optional(),
        deploy: z.string().optional(),
      }),
      repo: z.string().url(),
      demo: z.string().url().optional(),
      cover: image().optional(),
      status: z.enum(["terminado", "en-desarrollo"]),
      order: z.number().default(99),
    }),
});

export const collections = { projects };