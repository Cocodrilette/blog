import "highlight.js/styles/atom-one-dark-reasonable.css";
import dayjs from "dayjs";
import Image from "next/image";
import rehypeSlug from "rehype-slug";
import { MDXRemote } from "next-mdx-remote";
import rehypeHighlight from "rehype-highlight";
import rehypeCodeTitles from "rehype-code-titles";
import { serialize } from "next-mdx-remote/serialize";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

import { getSlug, getArticleFromSlug } from "@app/lib/mdxProcessor";
import Container5xl from "@app/components/commons/Container5xl";
import Layout from "@app/components/Layout";
import PostTitle from "@app/components/blog/PostTitle";
import TextSmallAndDimmed from "@app/components/text/TextSmallAndDimmed";
import InnerPostH2 from "../../components/blog/InnerPostH2";
import InnerPostH3 from "../../components/blog/InnerPostH3";
import styles from "@app/styles/Article.module.css";

export default function Blog({ article: { source, frontmatter } }: any) {
  return (
    <Layout
      headTitle={`Cocodrilette | ${frontmatter.title}`}
      headDescription={frontmatter.description}
      keywords={frontmatter.tags.join(", ")}
    >
      <Container5xl>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2 ">
            <PostTitle content={frontmatter.title} />
            <TextSmallAndDimmed>
              {dayjs(frontmatter.publishedAt).format("MMMM D, YYYY")}
            </TextSmallAndDimmed>
          </div>
          <div className="text-slate-200 my-5 border-b pb-5 border-dimmedPink">
            <p className="italic">{frontmatter.description}</p>
          </div>
          <div
            id={styles.postContent}
            className="flex flex-col gap-5 text-slate-200 mb-20 md:bg-gray-800/70 md:p-10 md:border md:border-dimmedPink"
          >
            <MDXRemote
              {...source}
              components={{ Image, InnerPostH2, InnerPostH3 }}
            />
          </div>
        </div>
      </Container5xl>
    </Layout>
  );
}

// dynamically generate the slugs for each article(s)
export async function getStaticPaths() {
  // getting all paths of each article as an array of
  // objects with their unique slugs
  const paths = (await getSlug()).map((slug) => ({ params: { slug } }));

  return {
    paths,
    // in situations where you try to access a path
    // that does not exist. it'll return a 404 page
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  //fetch the particular file based on the slug
  const { slug } = params;
  const { content, frontmatter } = await getArticleFromSlug(slug);

  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        [
          rehypeAutolinkHeadings,
          {
            properties: { className: ["anchor"] },
          },
          { behaviour: "wrap" },
        ],
        rehypeHighlight,
        rehypeCodeTitles,
      ],
    },
  });

  return {
    props: {
      article: {
        slug,
        source: mdxSource,
        frontmatter,
      },
    },
  };
}
