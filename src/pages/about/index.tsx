import Layout from "@app/components/Layout";
import PageTitle from "../../components/text/MainPageTitle";
import Container5xl from "@app/components/Container5xl";

export default function AboutPage() {
  return (
    <Layout
      headTitle="Cocodrilette - About"
      headDescription="Something about me."
    >
      <Container5xl>
        <PageTitle content="> About" />
      </Container5xl>
    </Layout>
  );
}
