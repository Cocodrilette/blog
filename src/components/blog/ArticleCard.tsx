import { BlogPostProps } from "@app/types/components";
import TextSmallAndDimmed from "@app/components/text/TextSmallAndDimmed";
import Tag from "./Tag";
import Link from "next/link";

const baseUrl = "blog/";

export default function ArticleCard({
  description,
  publishedAt,
  readingTime,
  tags,
  title,
  slug,
}: BlogPostProps) {
  return (
    <div className="flex flex-col gap-4 mb-7">
      <div className="flex flex-col gap-2">
        <Link href={baseUrl + slug}>
          <h1 className="md:text-2xl text-xl font-bold ">{title}</h1>
        </Link>
        <div className="flex gap-2">
          <TextSmallAndDimmed>{publishedAt}</TextSmallAndDimmed>
          <TextSmallAndDimmed>•</TextSmallAndDimmed>
          <TextSmallAndDimmed>{readingTime}</TextSmallAndDimmed>
        </div>
      </div>
      <p>{description}</p>
      <div className="flex gap-3">
        {tags?.map((tag, i) => (
          <Tag content={tag} key={i} />
        ))}
      </div>
    </div>
  );
}
