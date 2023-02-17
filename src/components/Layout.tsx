import Head from "next/head";
import { Montserrat } from "@next/font/google";
import Nav from "./Nav";

const montserrat = Montserrat({
  adjustFontFallback: true,
  subsets: [],
});

export interface LayoutProps {
  headTitle: string;
  headDescription: string;
  children: React.ReactNode;
}

export default function Layout({
  headTitle,
  headDescription,
  children,
}: LayoutProps) {
  return (
    <div
      className={`flex flex-col  min-w-screen min-h-screen bg-darkBg text-white ${montserrat.className}`}
    >
      <Head>
        <title>{headTitle}</title>
        <meta name="description" content={headDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main className="mt-5">{children}</main>
    </div>
  );
}
