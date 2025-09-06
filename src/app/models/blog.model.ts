export interface Blog {
  _id: string;
  title: string;
  slug: string;
  summary: string;
  content: string;
  coverImage: string;
  tags: string[];
  publishedDate: Date;
  createdAt: Date;
  updatedAt: Date;
}