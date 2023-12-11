import Header from "../../components/header/Header";
import "./globals.scss";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { roboto, montserrat } from "../../fonts";
import { availableLocales } from "../../utils/i18n";
import AuthProvider from "@/components/auth-provider/AuthProvider";

export const metadata = {
  title: "Movies App",
  description: "Choose your movie",
};

export function generateStaticParas() {
  return availableLocales.map((locale) => {
    locale;
  });
}

export default function RootLayout({ children, params: { locale } }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${montserrat.variable}`}
        suppressHydrationWarning={true}
      >
        <Header locale={locale} />
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
