import projects from "./projects.json";

export interface Project {
  title: string;
  summary: string;
  description: string;
  tags: string[];
  github: string | null;
  live: string | null;
  year: number;
  image: string;
  imageScale?: number;
}

export function getProjects(): Project[] {
  return projects;
}
