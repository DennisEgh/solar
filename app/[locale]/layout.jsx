
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import "../../styles/globals.css";
import Provider from "../../components/Provider";
import {useTranslations} from 'next-intl';
import { useServer } from 'next/dist/shared/lib/utils';
import { NextIntlClientProvider, useMessages } from "next-intl";


export const metadata = {
  title: "Solar",
  description: "Website",
};

const RootLayout = ({ children, locale }) => {
  const messages = useMessages()
  
  

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>

    <html lang={"en"}>
      <body>
        <Provider>
          <main className="app">
            <Nav/>
           
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
