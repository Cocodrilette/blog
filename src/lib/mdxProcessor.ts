import path from "path";
import fs from "fs";
import matter from "gray-matter";
import readingTime from "reading-time";
import { sync } from "glob";
import { ArticleData } from "../types/lib/index";

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

  const allArticles: ArticleData[] = articles.reduce(
    (acc: ArticleData[], articleSlug: string) => {
      const source = fs.readFileSync(
        path.join(articlesPath, articleSlug),
        "utf8"
      );
      const { data } = matter(source);

      const article = {
        ...data,
        slug: articleSlug.replace(".mdx", ""),
        readingTime: readingTime(source).text,
      };

      return [article, ...acc];
    },
    []
  );

  return allArticles;
}
