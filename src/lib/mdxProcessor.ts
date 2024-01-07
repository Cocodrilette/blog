import path from "path";
import fs from "fs";
import matter from "gray-matter";
import readingTime from "reading-time";
import { sync } from "glob";
import { ArticleData, PostFrontmatter } from "../types/lib/index";

const articlesPath = path.join(process.cwd(), "src/data/articles");

export async function getSlug() {
  const paths = sync(`${articlesPath}/*.mdx`);

  return paths.map((path) => {
    const pathContent = path.split("/");
    const fileName = pathContent[pathContent.length - 1];
    const [slug, _extension] = fileName.split(".");

    return slug;
  });
}

export async function getArticleFromSlug(slug: any) {
  const articleDir = path.join(articlesPath, `${slug}.mdx`);
  const source = fs.readFileSync(articleDir, "utf-8");
  const { content, data } = matter(source);

  return {
    content,
    frontmatter: {
      slug,
      title: data.title,
      description: data.description,
      publishedAt: data.publishedAt,
      tags: data.tags,
      readingTime: readingTime(source).text,
      ...data,
    },
  };
}

export async function getAllArticles() {
  const articles = fs.readdirSync(articlesPath);
  const allArticles: PostFrontmatter[] = parseArticlesFiles(articles);

  return allArticles;
}

export async function getArticles(amount: number = 5) {
  const articles = fs.readdirSync(articlesPath);
  const allArticles: PostFrontmatter[] = parseArticlesFiles(articles);

  return allArticles.slice(0, amount);
}

export function parseArticlesFiles(articles: string[]): PostFrontmatter[] {
  const parsedArticles = articles.reduce(
    (acc: any, articlePathName: string) => {
      const slug = articlePathName.replace(".mdx", "");
      const source = fs.readFileSync(
        path.join(articlesPath, articlePathName),
        "utf8"
      );
      const { data } = matter(source);

      return [
        {
          ...data,
          slug,
          readingTime: readingTime(source).text,
        },
        ...acc,
      ];
    },
    []
  );

  return parsedArticles;
}
