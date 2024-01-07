import Link from "next/link";

import { BLOG_BASE_PATH } from "@app/data/constants";

export function MinimalisticArticleCard(props: {
  slug: string;
  title: string;
  description: string;
  readingTime: string;
}) {
  return (
    <div
      className="text-card-foreground rounded-xl shadow-sm overflow-hidden"
      data-v0-t="card"
    >
      <div className="md:flex">
        <div className="">
          <Link
            href={BLOG_BASE_PATH + props.slug}
            className="flex items-center gap-2 hover:underline hover:text-blue-400 visited:text-purple-400"
          >
            <h2 className="tracking-tight block mt-1 text-xl leading-tight font-medium">
              {props.title}
            </h2>
          </Link>
          <p className="text-sm mt-2 text-gray-400">{props.readingTime}</p>
          <p className="mt-2 text-gray-300">{props.description}</p>
        </div>
      </div>
    </div>
  );
}
