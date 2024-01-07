import Layout from "@app/components/Layout";
import { PostFrontmatter } from "@app/types/lib";
import HowIAm from "@app/components/about/HowIAm";
import { getArticles } from "@app/lib/mdxProcessor";
import { Container5xl } from "@app/components/commons/Container5xl";
import PostsPreview from "@app/components/blog/PostsPreview";

export default function AboutPage(props: { articles: PostFrontmatter[] }) {
  return (
    <Layout
      headTitle="Cocodrilette"
      headDescription="A space dedicated to talk about tech, law, blockchain a more."
    >
      <Container5xl>
        <HowIAm />
        <PostsPreview articles={props.articles} />
      </Container5xl>
    </Layout>
  );
}

export async function getStaticProps(): Promise<{
  props: {
    articles: PostFrontmatter[];
  };
}> {
  const articles = await getArticles(3);
  return { props: { articles: articles } };
}
