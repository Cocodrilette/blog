import Layout from "@app/components/Layout";
import PageTitle from "@app/components/text/MainPageTitle";
import Container5xl from "@app/components/commons/Container5xl";
import BuiltByMe from "@app/components/about/BuiltByMe";
import HowIAm from "@app/components/about/HowIAm";

export default function AboutPage() {
  return (
    <Layout
      headTitle="Cocodrilette - About"
      headDescription="Something about me."
    >
      <Container5xl>
        <PageTitle content="About" />
        <HowIAm />
        <BuiltByMe />
      </Container5xl>
    </Layout>
  );
}
