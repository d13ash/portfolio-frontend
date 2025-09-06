export interface Project {
  _id: string;
  title: string;
  slug: string;
  summary: string;
  description: string;
  coverImage: string;
  technologies: string[];
  githubUrl?: string; // Optional property
  liveUrl?: string;   // Optional property
  createdAt?: Date;
}
