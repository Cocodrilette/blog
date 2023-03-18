import Head from "next/head";
import { Quicksand } from "@next/font/google";

import Footer from "@app/components/commons/Footer";
import Nav from "@app/components/commons/Nav";
import { LayoutProps } from "@app/types/components";

const quicksand = Quicksand({
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--quicksand-font",
});

export default function Layout({
  headTitle,
  headDescription,
  children,
  keywords,
}: LayoutProps) {
  return (
    <div
      className={`${quicksand.variable} flex flex-col min-w-screen min-h-screen bg-darkBg text-white`}
    >
      <Head>
        <title>{headTitle}</title>
        <meta name="author" content="Juan Fernando Cogollo Doria" />
        <meta name="description" content={headDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index,follow" />
        {keywords && <meta name="keywords" content={keywords} />}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main className="mt-5">{children}</main>
      <Footer />
    </div>
  );
}
