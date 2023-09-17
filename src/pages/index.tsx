import Layout from "@app/components/Layout";
import Container5xl from "@app/components/commons/Container5xl";
import HowIAm from "@app/components/about/HowIAm";

export default function AboutPage() {
  return (
    <Layout
      headTitle="Cocodrilette"
      headDescription="A space dedicated to talk about tech, law, blockchain a more."
    >
      <Container5xl>
        <HowIAm />
      </Container5xl>
    </Layout>
  );
}
