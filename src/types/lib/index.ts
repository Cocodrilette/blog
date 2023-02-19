export interface ArticleData {
  [key: string]: any;
}

export interface PostFrontmatter {
  title: string;
  description: string;
  publishedAt: string;
  tags: string[];
  readingTime: string;
}
