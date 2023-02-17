import Layout from "@app/components/Layout";
import PageTitle from "../../components/text/MainPageTitle";
import Container5xl from "@app/components/Container5xl";

export default function PostsPages() {
  return (
    <Layout
      headTitle="Cocodrilette - Blog"
      headDescription="Cocodrilette blog posts."
    >
      <Container5xl>
        <PageTitle content="> Blog" />
      </Container5xl>
    </Layout>
  );
}
