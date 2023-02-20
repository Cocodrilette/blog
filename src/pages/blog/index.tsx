import Layout from "@app/components/Layout";
import PageTitle from "@app/components/text/MainPageTitle";
import Container5xl from "@app/components/commons/Container5xl";
import { getAllArticles } from "@app/lib/mdxProcessor";
import ArticleCard from "@app/components/blog/ArticleCard";

export default function PostsPages(props: any) {
  const articles = props.allArticles
    .map((frontmatter: any, index: number) => {
      return (
        <ArticleCard
          key={index}
          slug={frontmatter.slug}
          title={frontmatter.title}
          description={frontmatter.description}
          publishedAt={frontmatter.publishedAt}
          readingTime={frontmatter.readingTime}
          tags={frontmatter.tags}
        />
      );
    })
    .reverse();

  return (
    <Layout
      headTitle="Cocodrilette - Blog"
      headDescription="Cocodrilette blog posts."
    >
      <Container5xl>
        <PageTitle content="Blog" />
        <div className="flex flex-col mt-10 mb-20 gap-5">{articles}</div>
      </Container5xl>
    </Layout>
  );
}

export async function getStaticProps() {
  const articles = await getAllArticles();

  articles
    .map((article) => article.data)
    .sort((a, b) => {
      if (a.data.publishedAt > b.data.publishedAt) return 1;
      if (a.data.publishedAt < b.data.publishedAt) return -1;

      return 0;
    });

  return { props: { allArticles: articles } };
}
