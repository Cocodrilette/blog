import Head from "next/head";
import { IBM_Plex_Sans } from "@next/font/google";

import Footer from "@app/components/commons/Footer";
import Nav from "@app/components/commons/Nav";
import { LayoutProps } from "@app/types/components";

const ibmPlexSans = IBM_Plex_Sans({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  style: ["italic", "normal"],
  subsets: [],
});

export default function Layout({
  headTitle,
  headDescription,
  children,
  keywords,
}: LayoutProps) {
  return (
    <div
      className={`flex flex-col  min-w-screen min-h-screen bg-darkBg text-white ${ibmPlexSans.className}`}
    >
      <Head>
        <title>{headTitle}</title>
        <meta name="author" content="Juan Fernando Cogollo Doria" />
        <meta name="description" content={headDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        {keywords && <meta name="keywords" content={keywords} />}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main className="mt-5">{children}</main>
      <Footer />
    </div>
  );
}
