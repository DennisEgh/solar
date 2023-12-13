
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import "../../styles/globals.css";
import Provider from "../../components/Provider";
import { NextIntlClientProvider, useMessages } from "next-intl";


export const metadata = {
  title: "Solar",
  description: "Website",
};

const RootLayout = ({ children }) => {
  const messages = useMessages()
  
  

  return (
    <NextIntlClientProvider messages={messages}>

    <html lang={"sv"}>
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
