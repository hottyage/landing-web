import "../styles/globals.css";
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
export default appWithTranslation(MyApp);

declare global {
  interface String {
    capitalize(): string;
  }
}
String.prototype.capitalize = function () {
  return this?.charAt(0)?.toUpperCase() + this?.slice(1);
};
