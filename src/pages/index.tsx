import PageTitle from "@app/components/text/MainPageTitle";
import Layout from "@app/components/Layout";
import Container5xl from "@app/components/commons/Container5xl";

export default function Home() {
  return (
    <Layout
      headTitle="Cocodrilette"
      headDescription="A space dedicated to talk about blockchain, law and whatever I want."
    >
      <Container5xl>
        <PageTitle content="Home" />
      </Container5xl>
    </Layout>
  );
}
