import { PostFrontmatter } from "@app/types/lib";
import { MinimalisticArticleCard } from "./ArticleCardMinimal";

export default function PostsPreview(props: { articles: PostFrontmatter[] }) {
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
    <div className="flex flex-col mb-20 gap-5">
      <div>
        <h2 className="text-2xl font-bold">Latests Posts</h2>
      </div>
      {articles}
    </div>
  );
}
