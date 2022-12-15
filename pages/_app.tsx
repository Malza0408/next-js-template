import type { AppProps } from "next/app";

if (process.env.NODE_ENV === "development") {
  require("../mocks");
}

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
