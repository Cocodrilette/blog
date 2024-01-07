import Link from "next/link";

import Tag from "./Tag";
import { BLOG_BASE_PATH } from "@app/data/constants";
import { BlogPostProps } from "@app/types/components";
import TextSmallAndDimmed from "@app/components/text/TextSmallAndDimmed";

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
        <Link href={BLOG_BASE_PATH + slug}>
          <h1 className="md:text-2xl text-xl font-bold ">{title}</h1>
        </Link>
        <div className="flex gap-2">
          <TextSmallAndDimmed>{publishedAt}</TextSmallAndDimmed>
          <TextSmallAndDimmed>•</TextSmallAndDimmed>
          <TextSmallAndDimmed>{readingTime}</TextSmallAndDimmed>
        </div>
      </div>
      <p>{description}</p>
      <div className="flex flex-wrap gap-3">
        {tags?.map((tag, i) => (
          <Tag content={tag} key={i} />
        ))}
      </div>
    </div>
  );
}
