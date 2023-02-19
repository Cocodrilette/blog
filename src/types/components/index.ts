import { ArticleData } from "../lib";

export interface ComponentWithContent {
  content: string;
}

export interface ComponentWithChildren {
  children: React.ReactNode;
}

export enum NavOptions {
  Home = "/",
  About = "/about",
  Blog = "/blog",
}
export interface HeaderLinkProps extends ComponentWithContent {
  href: NavOptions;
}

export interface LayoutProps extends ComponentWithChildren {
  headTitle: string;
  headDescription: string;
  keywords?: string;
}

export interface BlogIndexProps {
  allArticles: ArticleData[];
}

export interface BlogPostProps {
  key: number;
  title: string;
  description: string;
  publishedAt: string;
  readingTime: string;
  tags: string[];
  slug: string;
}

export interface TitleComponent extends ComponentWithContent {
  id: string;
}

export interface ExternalLinksProps extends ComponentWithContent {
  href: string;
}
