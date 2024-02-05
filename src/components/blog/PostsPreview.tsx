import { PostFrontmatter } from "@app/types/lib";
import { MinimalisticArticleCard } from "./ArticleCardMinimal";
import { MdKeyboardArrowDown } from "react-icons/md";
import Link from "next/link";

export function PostsPreview(props: { articles: PostFrontmatter[] }) {
  const articles = props.articles
    .sort((a: any, b: any) => {
      return (
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
      );
    })
    .map((postData: any, index: number) => {
      return (
        <div key={index} className="flex flex-col gap-10">
          <MinimalisticArticleCard
            slug={postData.slug}
            title={postData.title}
            description={postData.description}
            readingTime={postData.readingTime}
          />
        </div>
      );
    });

  return (
    <div className="flex flex-col mb-20 gap-10">
      <section className="flex flex-col gap-5">{articles}</section>
      <Link
        href="/blog"
        className="flex items-center justify-center border shadow-lg
        backdrop-blur-xl p-3 text-dimmedPink text-2xl"
      >
        <MdKeyboardArrowDown />
      </Link>
    </div>
  );
}
