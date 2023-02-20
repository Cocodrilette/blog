import "@app/styles/globals.css";
import { Quicksand } from "@next/font/google";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
