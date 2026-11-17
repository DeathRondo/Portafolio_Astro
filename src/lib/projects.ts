import { getCollection } from "astro:content";

export async function getProjects(lang: "es" | "en" = "es") {
  const projects = await getCollection("projects", ({ id }) =>
    id.startsWith(`${lang}/`)
  );
  return projects.sort((a, b) => a.data.order - b.data.order);
}

// "es/gym-tracker" → "gym-tracker"
export function projectSlug(id: string) {
  return id.split("/").slice(1).join("/");
}