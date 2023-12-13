import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import "../../styles/globals.css";
import Provider from "../../components/Provider";
import { NextIntlClientProvider, useLocale, useMessages } from "next-intl";

export const metadata = {
  title: "Solteknik & El Sverige Ab",
  description: "Website",
};

const RootLayout = ({ children }) => {
  const messages = useMessages();
  const locale = useLocale();
  const locales = ["sv_se", "en_us"];

  if (!locales.includes(locale)) notFound();

  return (
    <NextIntlClientProvider messages={messages}>
      <html lang={locale}>
        <body>
          <Provider>
            <main className="app">
              <Nav />

              {children}
              <Footer />
            </main>
          </Provider>
        </body>
      </html>
    </NextIntlClientProvider>
  );
};

export default RootLayout;
